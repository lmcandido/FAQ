// Function to toggle the answer when the question is clicked
function toggleAnswer(element) {
    // Toggle the 'active' class to add/remove styles
    element.classList.toggle("active");
  
    // Find the next sibling (the answer div) and toggle its display
    const answer = element.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";  // Hide the answer
      element.querySelector('.plus-sign').textContent = "+";  // Change to plus
    } else {
      answer.style.display = "block";  // Show the answer
      element.querySelector('.plus-sign').textContent = "-";  // Change to minus
    }
  }
  