const applicationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    scheme: { type: mongoose.Schema.Types.ObjectId, ref: 'Scheme' },
    status: { type: String, enum: ['applied', 'in-review', 'approved', 'rejected'], default: 'applied' },
    submittedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Application', applicationSchema);