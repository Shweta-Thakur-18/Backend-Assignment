const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  question_hi: { type: String },  // Hindi translation
  question_bn: { type: String },  // Bengali translation
  created_at: { type: Date, default: Date.now }
});

const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;
