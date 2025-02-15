const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const auth = require('../middleware/auth');

router.post('/apply/:schemeId', auth, async (req, res) => {
    const application = new Application({
        user: req.user._id,
        scheme: req.params.schemeId
    });
    await application.save();
    res.send('Application submitted successfully');
});

router.get('/status', auth, async (req, res) => {
    const applications = await Application.find({ user: req.user._id }).populate('scheme');
    res.send(applications);
});

module.exports = router;