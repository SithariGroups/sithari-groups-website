const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const galleryController = require('../controllers/galleryController');  // Ensure correct path

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Create uploads folder if it doesn't exist
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Ensure unique filenames by appending timestamp to original name
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Handle file upload for gallery
router.post('/', upload.single('eventImage'), galleryController.addGalleryImage);

module.exports = router;
