// JavaScript for gallery 
document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "images/Atrium.webp", "images/Gameroom.webp", "images/mainstage.jpg", "images/playplace.webp",
      "images/Kitchen.webp", "images/lasertag.webp", "images/golf.jpg", "images/gif/error.webp"
    ];
  
    let currentPage = 0;
    const imagesPerPage = 4;
    const galleryContainer = document.querySelector(".gallery-container");
  
    // Play error sound when clicking image
    const errorSound = new Audio('audio/enter.mp3');
    const alternateImage = "images/hidden.webp"; 
  
    function updateGallery() {
      galleryContainer.innerHTML = "";
      const start = currentPage * imagesPerPage;
      const end = Math.min(start + imagesPerPage, images.length);
      for (let i = start; i < end; i++) {
        let galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
  
        const imgElement = document.createElement("img");
        imgElement.src = images[i];
        imgElement.alt = `Gallery Image ${i + 1}`;
  
        // If the image is the error one, add the click event
        if (images[i].includes("error.webp")) {
          imgElement.addEventListener("click", function () {
            // Play error sound when clicked
            errorSound.play();
  
            // Change the image to the alternate one
            imgElement.src = alternateImage; // Change the image
  
            // Play the new sound after changing the image
            newSound.play();
          });
        }
  
        galleryItem.appendChild(imgElement);
        galleryContainer.appendChild(galleryItem);
      }
    }
  
    // Left arrow
    document.querySelector(".arrow-left").addEventListener("click", function () {
      if (currentPage > 0) {
        currentPage--;
        updateGallery();
      }
    });
  
    // Right arrow
    document.querySelector(".arrow-right").addEventListener("click", function () {
      if ((currentPage + 1) * imagesPerPage < images.length) {
        currentPage++;
        updateGallery();
      }
    });
  
    updateGallery();
  });