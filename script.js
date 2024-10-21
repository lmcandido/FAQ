const faqItems = document.querySelectorAll("faq-item");

for (let i = 0; i < faqItems.length; i++ ){
    let faqQuestion = faqItems[i].querySelector('.faq-question');
    let faqAnswer = faqItems[i].querySelector('.faq-answer');
    let faqImage = faqItems[i].querySelector('.clickable-image');

    faqQuestion.addEventListener('click', function() {
        if(faqAnswer.style.display === 'block'){
            faqAnswer.style.display = "none";
            faqImage.src = "https://raw.githubusercontent.com/lmcandido/FAQ/262c5f514deea2f347245ccff6da1d1553bbf944/assets/images/icon-plus.svg";
        } else {
            faqAnswer.style.display = "block";
            faqImage.src = "https://raw.githubusercontent.com/lmcandido/FAQ/0ff113a00d8f341ef2144542f39c7e33b9aa6f90/assets/images/icon-minus.svg";
        }
    });
}