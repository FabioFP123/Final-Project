function playSoundEffect() {
    const audio = new Audio("sampling/javascript/crazy-garble.mp3");
    console.log("Audio created:", audio);  // Logs the audio object to ensure it's created properly

    audio.play();
}
function changeImage() {

    var image = document.getElementById("imgClickAndChange");
    var imageSrc = image.src.replace(window.location.origin, "");

    if (imageSrc == "/sampling/images/frights/golden-cupcake-x200.png") {
        image.src = "sampling/images/frights/shadow-cupcake-x200.webp";
        playSoundEffect();
    } else {
        image.src = "sampling/images/frights/golden-cupcake-x200.png";
    }
}