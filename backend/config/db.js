const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Route for adding an event (with image/video upload)
router.post('/add', eventController.upload.single('eventImage'), eventController.addEvent);

module.exports = router;
