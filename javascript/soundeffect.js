function playSoundEffect() {
    const audio = new Audio('enter.mp3');
    audio.volume = 0.7; // 70% volume
    buttersAudio.currentTime = 0; 
    audio.play();
}
