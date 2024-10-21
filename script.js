const answer = document.querySelector('.faq-answer');
const image = document.querySelector('.faq-icon');

image.addEventListener('click', function() {
        // Toggle the visibility of the hidden text
        if (answer.style.display === "none") {
            answer.style.display = "block"; // Show the text
        } else {
            answer.style.display = "none"; // Hide the text
        }
});