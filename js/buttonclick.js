document.getElementById('result').innerHTML = "Score: " + localStorage.getItem('score');
let buttons = document.querySelectorAll('button');
//let minecraftbutton = new Audio('audio/button.mp3');
let score =  parseInt(localStorage.getItem('score'));
let scan = 0;
buttons.forEach(function(button) {
  button.click();
});

function scanned(qrCodeMessage){
  let scanner = document.querySelector('.scanner');
    if(scan === 0){
      scan = 1;
      localStorage.setItem('permission', "1");
      const timeout = 3000;
      if(qrCodeMessage === "Nieje Zeker!"){
        window.location.href = "bom.html";
      }
      else{
        startTimer(timeout-600);
        score++;
        localStorage.setItem('score', score.toString());
        scanner.style.visibility = "hidden";
        document.getElementById('result').innerHTML = "Score: " + localStorage.getItem('score');
      }
      setTimeout(() => { scanner.style.visibility= "visible"; scan = 0 }, timeout);
  }
}



/*
function playButton() {
  minecraftbutton.play();
}

*/


