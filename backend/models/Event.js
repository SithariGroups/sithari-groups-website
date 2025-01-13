const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  eventDescription: {
    type: String,
    required: true
  },
  eventImage: {
    type: String, // Store the path to the uploaded image/video
    default: null
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
