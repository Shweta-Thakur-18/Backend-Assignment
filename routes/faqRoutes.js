const express = require('express');
const { getFAQs, createFAQ } = require('../controllers/faqController');
const router = express.Router();

router.get('/faqs', getFAQs);         // Get FAQs with language support
router.post('/faqs', createFAQ);      // Create a new FAQ

module.exports = router;
