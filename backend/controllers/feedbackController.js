// controllers/feedbackController.js

const Feedback = require('../models/Feedback');  // Ensure correct path

const submitFeedback = async (req, res) => {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({
            message: 'Failed to submit feedback',
            error: 'Name, email, and message are required fields.',
        });
    }

    try {
        const feedback = new Feedback({ name, email, message });
        const savedFeedback = await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully.', feedback: savedFeedback });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to submit feedback',
            error: error.message,
        });
    }
};

module.exports = { submitFeedback };
