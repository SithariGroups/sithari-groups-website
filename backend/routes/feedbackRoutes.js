// routes/feedbackRoutes.js

const express = require('express');
const { submitFeedback } = require('../controllers/feedbackController');  // Adjusted path

const router = express.Router();

router.post('/', submitFeedback);  // Ensure this route is defined

module.exports = router;
