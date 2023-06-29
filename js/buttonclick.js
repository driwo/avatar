let buttons = document.querySelectorAll('button');

//localStorage.removeItem('score');
let score;
if(isNaN(parseInt(localStorage.getItem('score'))) || parseInt(localStorage.getItem('score')) === null){
  score = 0;
}
else{
  score =  parseInt(localStorage.getItem('score'));
}
document.getElementById('result').innerHTML = "Score: " + score;
let scan = 0;
buttons.forEach(function(button) {
  button.click();
});

function scanned(qrCodeMessage){
  let scanner = document.querySelector('.scanner');
    if(scan === 0){
      localStorage.setItem('permission', "1");
      const timeout = 2600;
      if(qrCodeMessage === "Nieje Zeker!"){
        scan = 1;
        window.location.href = "bom.html";
      }
      else{
        startTimer(timeout-600);
        score++;
        localStorage.setItem('score', score.toString());
        scanner.style.visibility = "hidden";
        document.getElementById('result').innerHTML = "Score: " + localStorage.getItem('score');
      }
      setTimeout(() => { scan = 0 }, timeout);
  }
}



/*
function playButton() {
  minecraftbutton.play();
}

*/


