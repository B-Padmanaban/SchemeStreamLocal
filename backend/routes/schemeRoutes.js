const express = require('express');
const router = express.Router();
const Scheme = require('../models/schemeModel');
const auth = require('../middleware/auth');  // Updated auth middleware

// Get all categories (accessible to all authenticated users)
router.get('/categories', auth, async (req, res) => {
    const categories = await Scheme.distinct('category');
    res.send(categories);
});

// Get schemes by category (accessible to all authenticated users)
router.get('/:category', auth, async (req, res) => {
    const schemes = await Scheme.find({ category: req.params.category });
    res.send(schemes);
});

// Add a new scheme (accessible only to authority users)
router.post('/', auth, async (req, res) => {
    if (req.user.role !== 'authority') {
        return res.status(403).send('Access denied. Only authority can add schemes.');
    }
    const scheme = new Scheme(req.body);
    await scheme.save();
    res.send(scheme);
});

//get a scheme from normal user
router.get('/', async (req, res) => {
    try {
        const schemes = await Scheme.find();
        res.json(schemes);
    } catch (err) {
        console.error('Error fetching schemes:', err);
        res.status(500).send('Server Error');
    }
});



// Update a scheme (accessible only to authority users)
router.put('/:id', auth, async (req, res) => {
    if (req.user.role !== 'authority') {
        return res.status(403).send('Access denied. Only authority can update schemes.');
    }
    try {
        const scheme = await Scheme.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!scheme) return res.status(404).send('Scheme not found');
        res.json(scheme);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Delete a scheme (accessible only to authority users)
router.delete('/:id', auth, async (req, res) => {
    if (req.user.role !== 'authority') {
        return res.status(403).send('Access denied. Only authority can delete schemes.');
    }
    await Scheme.findByIdAndDelete(req.params.id);
    res.send('Scheme deleted successfully');
});

module.exports = router;