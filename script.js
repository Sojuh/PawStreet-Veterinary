function handleFormSubmit(event) {
    event.preventDefault();
    alert('Form submitted!');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});