function onYouTubeIframeAPIReady() {
  console.log("YouTube API is ready!");
  var player;
  player = new YT.Player('player', {
    width: 20,
    height: 20,
    videoId: 'K7gKsoSb3H4',
    playerVars:
    {
      autoplay: 1,  // Autoplay the video
      mute: 0,      // Unmute the video (set to 1 to mute)
      controls: 0,  // Hide player controls
      loop: 1,      // Loop the video
      playlist: 'K7gKsoSb3H4'
    },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  event.target.setVolume(40);
  event.target.playVideo();
  document.getElementById('player').style.display = 'none';


}