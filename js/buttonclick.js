let buttons = document.querySelectorAll('button');

// score uit localstorage
let score;
if(isNaN(parseInt(localStorage.getItem('score'))) || parseInt(localStorage.getItem('score')) === null){
  score = 0;
}
else{
  score =  parseInt(localStorage.getItem('score'));
}
document.getElementById('result').innerHTML = "Score: " + score;

//array QRcodes uit localstorage
const storedArrayString = localStorage.getItem('myArray');
let storedArray;
// Check if the stored array is null or undefined
if (storedArrayString) {
  storedArray = JSON.parse(storedArrayString);
}
else {
  storedArray = [];
  const newStoredArrayString = JSON.stringify(storedArray);
  localStorage.setItem('myArray', newStoredArrayString);
}

let scan = 0;
buttons.forEach(function(button) {
  button.click();
});

// FUNCTIONS
function scanned(qrCodeMessage){
  let scanner = document.querySelector('.scanner');
    if(scan === 0){
      localStorage.setItem('permission', "1");
      scan = 1;
      const timeout = 2600;
      const storedArrayString = localStorage.getItem('myArray');
      let storedArray = JSON.parse(storedArrayString);
      const footer = document.getElementById("score");
      //BOOLEAN VOOR EENMALIGE SCAN ENABLE
      const onetime = 1;
      const unique = 1; //met 'spw' ervoor
      if(qrCodeMessage === "Nieje Zeker!"){
        window.location.href = "bom.html";
      }
      else if(qrCodeMessage.substring(0,6)==="player"){
        checkName(qrCodeMessage.substring(6,9));
        startTimer(timeout-600);
        scanner.style.visibility = "hidden";
      }
      else if(qrCodeMessage.substring(0,3)!=="spw" && unique){
        footer.style.backgroundColor = "#EC2247";
        setTimeout(function() {scan = 0; footer.style.backgroundColor = "#222222";}, 1000);
      }
      else if (storedArray.includes(qrCodeMessage) && onetime) {
        footer.style.backgroundColor = "#EC2247";
        setTimeout(function() {scan = 0; footer.style.backgroundColor = "#222222";}, 1000);
      }
      else {
        if(onetime){
          storedArray.push(qrCodeMessage);
        }
        console.log(`${storedArray} `);
        const updatedArrayString = JSON.stringify(storedArray);
        localStorage.setItem('myArray', updatedArrayString);
        startTimer(timeout-600);
        if(qrCodeMessage.substring(0,8)==="spwsuper"){
          score = score + 10000;
        }
        else{
          score++;
        }
        localStorage.setItem('score', score.toString());
        scanner.style.visibility = "hidden";
        document.getElementById('result').innerHTML = "Score: " + localStorage.getItem('score');
      }
  }
}



/*
function playButton() {
  minecraftbutton.play();
}

*/


