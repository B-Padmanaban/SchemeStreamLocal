const mongoose = require('mongoose');


const applicationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    scheme: { type: mongoose.Schema.Types.ObjectId, ref: 'Scheme', required: true },
    status: { type: String, enum: ['applied', 'in-review', 'approved', 'rejected'], default: 'applied' },
    appliedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Application', applicationSchema);