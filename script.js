const imageElements = document.querySelectorAll(".clickable-image");

function toggleAnswer(name) {
    name.classList.toggle("active");
    const answer = name.nextElementSibling;

    if (answer.style.display === "block") {
        answer.style.display = "none";
        imageElements.src = "https://raw.githubusercontent.com/lmcandido/FAQ/262c5f514deea2f347245ccff6da1d1553bbf944/assets/images/icon-plus.svg";
    } else {
        answer.style.display = "block";
        imageElements.src = "https://raw.githubusercontent.com/lmcandido/FAQ/0ff113a00d8f341ef2144542f39c7e33b9aa6f90/assets/images/icon-minus.svg";
    }
}

imageElements.forEach(element => {
    element.onclick = function() {
        toggleAnswer(element);
    }
});