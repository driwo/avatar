let buttons = document.querySelectorAll('button');
let minecraftbutton = new Audio('audio/button.mp3');
let scan = 0;
buttons.forEach(function(button) {
  button.addEventListener('click', playButton);
  button.click();
});

function scanned(qrCodeMessage){
  let scanner = document.querySelector('.scanner');
    if(scan === 0){
      scan = 1;
      localStorage.setItem('permission', "1");
      if(qrCodeMessage === "my.lasermaxx.com/8swxzdr"){
        window.location.href = "bom.html";
      }
      const timeout = 3000;
      startTimer(timeout-600);
      scanner.style.visibility = "hidden";
      setTimeout(() => { scanner.style.visibility= "visible"; scan = 0 }, timeout);
  }
}
function playButton() {
  minecraftbutton.play();
}




