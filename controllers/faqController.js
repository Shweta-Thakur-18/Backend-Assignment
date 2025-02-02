const FAQ = require('../models/faq');
const redis = require('../config/redis');
//const googleTranslate = require('google-translate-api');
const googleTranslate = require('@vitalets/google-translate-api');


// Function to fetch FAQs with translation
const getFAQs = async (req, res) => {
  const language = req.query.lang || 'en'; // Default to English
  const cacheKey = `faqs_${language}`;

  // Check Redis cache first
  redis.get(cacheKey, async (err, cachedData) => {
    if (cachedData) {
      return res.json(JSON.parse(cachedData)); // Return cached data
    }

    // Fetch FAQs from database
    const faqs = await FAQ.find();

    const translatedFAQs = faqs.map(faq => {
      let question = faq.question;

      if (language === 'hi' && faq.question_hi) {
        question = faq.question_hi;
      } else if (language === 'bn' && faq.question_bn) {
        question = faq.question_bn;
      }

      return { question, answer: faq.answer };
    });

    // Store FAQs in Redis cache
    redis.setex(cacheKey, 3600, JSON.stringify(translatedFAQs)); // Cache for 1 hour
    res.json(translatedFAQs);
  });
};

// Create a new FAQ entry with translations
const createFAQ = async (req, res) => {
  const { question, answer } = req.body;

  // Automatic translations (Google Translate API)
  const question_hi = await googleTranslate.translate(question, { to: 'hi' }).then(res => res.text);
  const question_bn = await googleTranslate.translate(question, { to: 'bn' }).then(res => res.text);

  const newFAQ = new FAQ({
    question,
    answer,
    question_hi,
    question_bn
  });

  await newFAQ.save();
  res.status(201).json(newFAQ);
};

module.exports = { getFAQs, createFAQ };

