const mongoose = require('mongoose');


const schemeSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    eligibility: Object,
    benefits: String,
    application_deadline: Date,
    status: String
});
module.exports = mongoose.model('Scheme', schemeSchema);