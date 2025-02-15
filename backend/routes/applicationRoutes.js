const express = require('express');
const router = express.Router();
const Application = require('../models/applicationModel');
const auth = require('../middleware/auth');

// Route to submit an application
router.post('/apply/:schemeId', auth, async (req, res) => {
    const application = new Application({
        user: req.user._id,
        scheme: req.params.schemeId
    });
    await application.save();
    res.send('Application submitted successfully');
});

// Route to get application status
router.get('/status', auth, async (req, res) => {
    const applications = await Application.find({ user: req.user._id }).populate('scheme');
    res.send(applications);
});

// Route for authorities to update application status
router.put('/update/:applicationId', auth, async (req, res) => {
    if (req.user.role !== 'authority') return res.status(403).send('Access denied');
    const application = await Application.findByIdAndUpdate(req.params.applicationId, { status: req.body.status }, { new: true });
    res.send(application);
});

// Route for users to get details of a specific application
router.get('/:applicationId', auth, async (req, res) => {
    const application = await Application.findById(req.params.applicationId).populate('scheme');
    if (!application) return res.status(404).send('Application not found');
    if (application.user.toString() !== req.user._id && req.user.role !== 'authority') return res.status(403).send('Access denied');
    res.send(application);
});

module.exports = router;
