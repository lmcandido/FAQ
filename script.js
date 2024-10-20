const imageElements = document.querySelectorAll(".clickable-image");

//Define image sources
const originalImage = "https://raw.githubusercontent.com/lmcandido/FAQ/262c5f514deea2f347245ccff6da1d1553bbf944/assets/images/icon-plus.svg";
const newImageSource = "https://raw.githubusercontent.com/lmcandido/FAQ/0ff113a00d8f341ef2144542f39c7e33b9aa6f90/assets/images/icon-minus.svg";

imageElements.forEach((image) => {
    const hiddenText = image.nextElementSibling;

    image.addEventListener("click", function(){
        if (image.src === originalImage){
            image.src = newImageSource;
            hiddenText.style.display = "block";
        } else {
            image.src = originalImage;
            hiddenText.style.display = "none";
        }
    });
});