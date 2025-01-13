// routes/contactRoutes.js
const express = require('express');
const { createContact } = require('../controllers/contactController');  // Correct path

const router = express.Router();

router.post('/', createContact);  // Ensure POST method is configured

module.exports = router;
