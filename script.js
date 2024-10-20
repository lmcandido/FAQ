function toggleAnswer(element) {
    element.classList.toggle("active");
    const answer = element.nextElementSibling;
    const image = element.querySelector('.clickable-image')

    const image1 = "https://raw.githubusercontent.com/lmcandido/FAQ/262c5f514deea2f347245ccff6da1d1553bbf944/assets/images/icon-plus.svg";
    const image2 = "https://raw.githubusercontent.com/lmcandido/FAQ/262c5f514deea2f347245ccff6da1d1553bbf944/assets/images/icon-minus.svg";

    if (answer.style.display === "block") {
        answer.style.display = "none";
        image.scr = image1;
    } else {
        answer.style.display = "block";
        image.scr = image2;
    }
}