// controllers/contactController.js
const Contact = require('../models/Contact');

const createContact = async (req, res) => {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({
            message: 'Failed to submit contact form',
            error: 'Name, email, and message are required fields.',
        });
    }
    

    // Logic to save the contact form in the database (assuming you're using Mongoose)
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to submit contact form', error: error.message });
    }
};


module.exports = { createContact };
