document.addEventListener('DOMContentLoaded', () => {
    // Initialize Event Listeners
    initEventListeners();
});

function initEventListeners() {
    // Submit Feedback Form
    const feedbackButton = document.querySelector("#submit-feedback");
    if (feedbackButton) {
        feedbackButton.addEventListener("click", handleFeedbackSubmit);
    }

    // Handle the Contact Us Form Submission
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", handleContactSubmit);
    }

    // Display Upcoming Events
    const upcomingEventsButton = document.querySelector("#upcoming-events");
    if (upcomingEventsButton) {
        upcomingEventsButton.addEventListener("click", showUpcomingEvents);
    }
}

function handleFeedbackSubmit(e) {
    e.preventDefault();

    const name = document.querySelector("#feedback-name").value;
    const email = document.querySelector("#feedback-email").value;
    const message = document.querySelector("#feedback-message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Send Feedback to Backend (Mock)
    alert("Thank you for your feedback!");
}

function handleContactSubmit(e) {
    e.preventDefault();

    const name = document.querySelector("#contact-name").value;
    const email = document.querySelector("#contact-email").value;
    const message = document.querySelector("#contact-message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Send Contact Form Data to Backend (Mock)
    alert("Your message has been sent!");
}

function showUpcomingEvents() {
    const eventsList = document.querySelector("#events-list");
    eventsList.innerHTML = `
        <div class="event-item">
            <h3>Event 1</h3>
            <p>Date: 2025-01-15</p>
            <p>Location: ABC Venue</p>
            <p>Description: Music Concert</p>
        </div>
        <div class="event-item">
            <h3>Event 2</h3>
            <p>Date: 2025-02-20</p>
            <p>Location: XYZ Venue</p>
            <p>Description: Wedding Ceremony</p>
        </div>
    `;
}
