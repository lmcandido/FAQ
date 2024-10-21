const imageElements = document.querySelectorAll(".faq-item");

        // Define image sources
        const originalImage = "https://raw.githubusercontent.com/lmcandido/FAQ/262c5f514deea2f347245ccff6da1d1553bbf944/assets/images/icon-plus.svg";
        const newImageSource = "https://raw.githubusercontent.com/lmcandido/FAQ/0ff113a00d8f341ef2144542f39c7e33b9aa6f90/assets/images/icon-minus.svg";

        // Loop through each image element
        imageElements.forEach((question) => {
            const image = question.querySelector('.faq-icon')
            const answer = question.querySelector('.faq-answer') // Get the corresponding hidden text

            // Add click event listener to each image
            image.addEventListener("click", function() {
                // Change the source of the image when clicked
                if (image.src === originalImage) {
                    image.src = newImageSource; // Change to the new image
                    answer.style.display = "block"; // Show the hidden text
                } else {
                    image.src = originalImage; // Change back to the original image
                    answer.style.display = "none"; // Hide the text again
                }
            });
        });
        