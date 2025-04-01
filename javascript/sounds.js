// plays sound when you click on freddy 
function playSound() {
  var audio = new Audio('audio/superstar.mp3'); 
  audio.play();
}


//javaScript to handle sound effect on click and the sound 
document.addEventListener("DOMContentLoaded", function () {
    const sound = new Audio("audio/glitch.mp3");
    sound.preload = "auto"; 

    const vannyLink = document.querySelector(".glitch-effect");

    vannyLink.addEventListener("click", function (e) {
      e.preventDefault(); 

      // Start playing the sound
      sound.currentTime = 0; 
      sound.volume = 1.0;
      sound.play().catch(error => console.error("Error playing sound:", error));

      //This is so after sound is played it goes to the secret page
      sound.onended = function() {
        window.location.href = vannyLink.getAttribute('href'); 
      };
    });
  });


//secret.html music and changing favicon title
  const sound = new Audio("audio/vanny.mp3"); 

  window.addEventListener('load', function() {
    sound.play();
  });

  const titles = ["Vanny", "V@nn¥", "error","she's watching"]; 
  let currentTitle = 2;

  setInterval(function () {
    document.title = titles[currentTitle];  
    currentTitle = (currentTitle + 1) % titles.length; 
  }, 500);