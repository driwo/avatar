let buttons = document.querySelectorAll('button');
let minecraftbutton = new Audio('audio/button.mp3');
let biep = new Audio('audio/scanned.mp3');
buttons.forEach(function(button) {
  button.addEventListener('click', playButton);
});

function scanned(){
  let scanner = document.querySelector('.scanner');
    if(scanner.style.visibility !== "hidden"){
    scanner.style.visibility= "hidden";
    setTimeout(() => { biep.play(); }, 100);
    setTimeout(() => { scanner.style.visibility= "visible"; }, 3000);
  }
}
function playButton() {
  minecraftbutton.play();
}




