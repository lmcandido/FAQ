const faqquestion = document.querySelector('.faq-question');

function toggleAnswer(element) {
    element.classList.toggle("active");

    const answer = element.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
        element.querySelector('.plus-sign').textContent = "+";
    } else {
        answer.style.display = "block";
        element.querySelector('.plus-sign').textContent = "-";
    }
}

faqquestion.addEventListener('click', toggleAnswer);