const multer = require('multer');
const path = require('path');
const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController'); // Ensure this path is correct

// Assuming your function in galleryController is named 'addGalleryImage'
router.post('/api/gallery', galleryController.addGalleryImage); 

module.exports = router;


// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Folder for storing uploaded files
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Create unique filename
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image') || file.mimetype.startsWith('video')) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only images and videos are allowed.'));
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
