let buttons = document.querySelectorAll('button');
let minecraftbutton = new Audio('audio/button.mp3');
let biep = new Audio('audio/scanned.mp3');
buttons.forEach(function(button) {
  button.addEventListener('click', playButton);
});
function playButton() {
  minecraftbutton.play();
}
function playScan(){
  biep.play();
}



