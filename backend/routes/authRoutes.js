const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Register User
router.post('/register', async (req, res) => {
    try {
        const {email, password, role } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({email, password: hashedPassword, role });
        await user.save();
        res.send('User registered successfully');
    } catch (err) {
        res.status(500).send('Registeration Failed');
    }
});

// Login User
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('User not found');

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).send('Invalid password');

        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24hr' });
        res.header('Authorization', token).send({ token, user });
    } catch (err) {
        console.error('Error in login:', err);
        res.status(500).send('Server Error');
    }
});

// Logout User
router.post('/logout', (req, res) => {
    try {
        res.header('Authorization', '').send('Logged out successfully');
    } catch (err) {
        console.error('Error in logout:', err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
