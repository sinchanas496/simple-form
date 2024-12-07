// Select the form element
const form = document.getElementById('googleForm');

// Add an event listener to handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const className = document.getElementById('class').value;

    // Perform basic validation
    if (!name || !email || !className) {
        alert('All fields are required!');
        return;
    }

    // Display a confirmation message
    alert(`Form submitted successfully!\nName: ${name}\nEmail: ${email}\nClass: ${className}`);

    // Clear the form
    form.reset();
});
