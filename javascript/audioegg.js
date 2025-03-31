// Audio Player Setup
const buttersAudio = new Audio('audio/exotic-butters.mp3');
buttersAudio.volume = 0.7;

document.getElementById('butters-trigger').addEventListener('click', () => {
    // Restart audio if already playing
    buttersAudio.currentTime = 0;
    buttersAudio.play().catch(e => {
        console.log("Auto-play blocked. Click the page first.", e);
        // Fallback: Show play button
        alert("Click anywhere on the page first, then try again!");
    });
});