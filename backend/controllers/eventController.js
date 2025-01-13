const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Event = require('../models/Event');

// Ensure the uploads directory exists
const uploadDirectory = path.join(__dirname, '../uploads/events');
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);  // Store in 'uploads/events'
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);  // Add timestamp to filename
  }
});

// File filter to allow only images and videos
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image') || file.mimetype.startsWith('video')) {
    cb(null, true);  // Accept the file
  } else {
    cb(new Error('Invalid file type, only images and videos are allowed.'));
  }
};

// Initialize multer
const upload = multer({ storage, fileFilter });

// Controller function for adding an event
const addEvent = (req, res) => {
    const { eventTitle, eventDate, eventDescription } = req.body;
    const eventImage = req.file ? req.file.path : null;  // Image file path
  
    // Check if any required fields are missing
    if (!eventTitle || !eventDate || !eventDescription) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    // Create new event object
    const newEvent = new Event({
      eventTitle,
      eventDate,
      eventDescription,
      eventImage
    });
  
    // Save event to database
    newEvent.save()
      .then(event => res.json({ message: 'Event added successfully', event }))
      .catch(err => res.status(500).json({ error: err.message }));
};

// Export the function
module.exports = { addEvent, upload };
