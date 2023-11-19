// Add your JavaScript functions here

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function validateForm(event) {
    // Add your form validation logic here
    // Prevent the form from submitting if validation fails
    event.preventDefault();
}
