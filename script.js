function toggleAnswer(element) {
    element.classList.toggle("active");

    const answer = element.NextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
        element.querySelector('.plus-sign').textContent = "+";
    } else {
        answer.style.display = "block";
        element.querySelector('.plus-sign').textContent = "-";
    }
}