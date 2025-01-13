const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');  // Corrected path
const contactRoutes = require('./routes/contactRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const galleryRoutes = require('./routes/galleryRoutes');

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

// MongoDB connection
connectDB();  // MongoDB connection setup

// Routes
app.use('/api/events', eventRoutes);  // Event routes
app.use('/api/contact', contactRoutes);  // Contact routes
app.use('/api/feedback', feedbackRoutes);  // Feedback routes
app.use('/api/gallery', galleryRoutes);  // Gallery routes

// Starting the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
