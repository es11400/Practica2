
document.getElementById("video1").addEventListener("click", function() {
  launchFullScreen(this);
  this.play
});

document.getElementById("video2").addEventListener("click", function() {
  launchFullScreen(this);
  this.play
});
document.getElementById("video3").addEventListener("click", function() {
  launchFullScreen(this);
  this.play
});

document.getElementById("video4").addEventListener("click", function() {
  launchFullScreen(this);
  this.play
});

function launchFullScreen(element) {
   if (element.requestFullscreen) {
       element.requestFullscreen();
   } else if (element.mozRequestFullScreen) {
       element.mozRequestFullScreen();
   } else if (element.webkitRequestFullscreen) {
       element.webkitRequestFullscreen();
   } else if (element.msRequestFullscreen) {
       element.msRequestFullscreen();
   }
 
}

function exitFullScreen() {
   if (document.exitFullscreen) {
       document.exitFullscreen();
   } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen();
   } else if (document.webkitExitFullscreen) {
       document.webkitExitFullscreen();
   }
    
}