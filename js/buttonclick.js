let buttons = document.querySelectorAll('button');

const bomstorage = localStorage.getItem('bom');
let bomActive = 0;
let bomExploded = 0;

// fase uit localstorage
let fase;
if(isNaN(parseInt(localStorage.getItem('fase'))) || parseInt(localStorage.getItem('fase')) === null){
  fase = 1;
  localStorage.setItem('fase', fase.toString());
}
else{
  fase =  parseInt(localStorage.getItem('fase'));
}
document.getElementById('result').innerHTML = "fase: " + fase;

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
      const onetime = 0;
      const unique = 0; //met 'spw' ervoor
      if(qrCodeMessage === "puntB" && bomActive===1 && parseInt(localStorage.getItem('fase'))===3 ){
        bomActive = 0;
        mmtext.innerHTML = "Bom ontploft!";
        timer.style.display = "none";
        bomExploded=1;
        startTimer(timeout-600);
        scanner.style.visibility = "hidden";
        checkFase();
      }
      else if(qrCodeMessage === "puntA" && parseInt(localStorage.getItem('fase'))===3){
        startBom();
        startTimer(58000);
        scanner.style.visibility = "hidden";
        //console.log(JSON.parse(localStorage.getItem('bom')));
        //window.location.href = "bom.html";
      }
      else if(qrCodeMessage.substring(0,5)==="kleur"){
        colorScanned(qrCodeMessage.substring(5,9));
        startTimer(timeout-600);
        scanner.style.visibility = "hidden";
      }
      else if(qrCodeMessage.substring(0,6)==="player"){
        checkName(qrCodeMessage.substring(6,10));
        startTimer(timeout-600);
        scanner.style.visibility = "hidden";
      }
      else if(qrCodeMessage === "haasje"){
        haasjeScanned();
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
          //fase = fase + 10;
        }
        else{
          //fase++;
        }
        localStorage.setItem('fase', fase.toString());
        scanner.style.visibility = "hidden";
        document.getElementById('result').innerHTML = "fase: " + localStorage.getItem('fase');
      }
  }
}



/*
function playButton() {
  minecraftbutton.play();
}

*/


