const imageElements = document.querySelectorAll(".clickable-image");

const originalImage = "https://raw.githubusercontent.com/lmcandido/FAQ/262c5f514deea2f347245ccff6da1d1553bbf944/assets/images/icon-plus.svg";
const newImageSource = "https://raw.githubusercontent.com/lmcandido/FAQ/0ff113a00d8f341ef2144542f39c7e33b9aa6f90/assets/images/icon-minus.svg";

imageElements.forEach((image) => {

    image.addEventListener("click", function() {

        if (image.src === originalImage){
            image.src = newImageSource;
        } else {
            image.src = originalImage;
        }
    });
});