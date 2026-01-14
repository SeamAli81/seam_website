// JavaScript code for form validation

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            // Submit the form data
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '') {
            alert('Please enter your name.');
            return false;
        }

        if (email === '') {
            alert('Please enter your email.');
            return false;
        } else if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (subject === '') {
            alert('Please enter the subject.');
            return false;
        }

        if (message === '') {
            alert('Please enter your message.');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
