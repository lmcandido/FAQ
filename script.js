let faqquestion = document.querySelectorAll('.faq-question');

faqquestion.forEach(question => {
    question.addEventListener('click', function() {
        const answer = element.nextElementSibling;
        answer.classList.toggle("active");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            element.querySelector('.plus-sign').textContent = "+";
        } else {
            answer.style.display = "block";
            element.querySelector('.plus-sign').textContent = "-";
        }
    });
});