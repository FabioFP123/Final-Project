let $tv = document.getElementById('tv')
let $text = document.getElementById('textbox')

// var input = document.getElementById("textbox");
// var image = document.getElementById("video");
// var tvvideo = document.getElementById("vid");
document.getElementById("video").style.visibility = "hidden";
document.getElementById("vid").style.visibility = "hidden";
document.getElementById("textbox").style.visibility = "visible";

var index;
var again = 0

const source = ["url(/sampling/images/)", "sampling/images/tv/afton_audio_log.mp4", "sampling/images/tv/connection.mp4", "sampling/images/tv/jumpscare.mp4", "sampling/images/tv/springlock.mp4"]

const keywords = ["it's me", "1983", "connection", "1987", "springlock"]


  addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    var inputtext = document.getElementById('textbox').value
    if (event.key === "Enter" && again === 0  && inputtext != "")  {
      // Cancel the default action, if needed
      for (let i = 0; i < keywords.length; i++) {
        if (inputtext == keywords[i]) {
            index = i
            break
        } else {
            index = 10
        }
    
      }
      if (index == 0) {
        document.getElementById("video").style.visibility = "hidden";
        document.getElementById("vid").style.visibility = "hidden";
        document.getElementById("textbox").style.visibility = "visible";
        document.getElementById("textbox").value = "SAVE THEM";
        again = 0
      } else if (index > 0) {
        document.getElementById("vid").style.visibility = "visible";
        document.getElementById("textbox").style.visibility = "hidden";
        document.getElementById("vid").setAttribute('src', source[index]);
        document.getElementById("vid").play()
        again = 1
      } else {
        document.getElementById("video").style.visibility = "visible";
        document.getElementById("textbox").style.visibility = "hidden";
        document.getElementById("video").style.content = source[index];
        again = 1
      }
      // Trigger the button element with a click
    } else if (event.key === "Enter") {
        document.getElementById("video").style.visibility = "hidden";
        document.getElementById("vid").style.visibility = "hidden";
        document.getElementById("textbox").style.visibility = "visible";
        document.getElementById("textbox").value = "";
        document.getElementById("vid").pause()
        document.getElementById("vid").setAttribute('src', '')
        index = 10
        again = 0
    }
  });