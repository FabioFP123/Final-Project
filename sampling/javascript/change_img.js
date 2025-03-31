function playSoundEffect() {
    const audio = new Audio("sounds/crazy-garble.mp3");
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