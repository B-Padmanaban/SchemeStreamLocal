const express = require('express');
const router = express.Router();
const Scheme = require('../models/Scheme');
const auth = require('../middleware/auth');

router.get('/categories', auth, async (req, res) => {
    const categories = await Scheme.distinct('category');
    res.send(categories);
});

router.get('/:category', auth, async (req, res) => {
    const schemes = await Scheme.find({ category: req.params.category });
    res.send(schemes);
});

module.exports = router;