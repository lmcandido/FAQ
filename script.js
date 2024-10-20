let faqquestion = document.querySelectorAll('.faq-question');

faqquestion.forEach(question => {
    question.addEventListener('click', function() {
        const answer = element.nextElementSibling;
        answer.classList.toggle("active");
    });
});