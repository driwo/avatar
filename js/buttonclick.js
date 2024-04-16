let buttons = document.querySelectorAll('button');

const codelijst = ["6","5","4","3","2","1"];
let codecracked = [0,0,0,0,0,0];


for(let i = 0; i < 6; i++){
  if(localStorage.getItem("code")){
    const cc = JSON.parse(localStorage.getItem("code"));
    if(cc[i]){
      let id = 100 + i;
      let c = document.getElementById(id.toString());
      c.innerHTML = codelijst[i];
      c.style.backgroundColor = "#90FF20";
    }
  }
}


// fase uit localstorage
/*let fase;
if(isNaN(parseInt(localStorage.getItem('fase'))) || parseInt(localStorage.getItem('fase')) === null){
  fase = 1;
  localStorage.setItem('fase', fase.toString());
}
else{
  fase =  parseInt(localStorage.getItem('fase'));
}*/

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
      //const storedArrayString = localStorage.getItem('myArray');
      //let storedArray = JSON.parse(storedArrayString);
      //const footer = document.getElementById("score");
      //BOOLEAN VOOR EENMALIGE SCAN ENABLE
      //const onetime = 0;
      //const unique = 0; //met 'spw' ervoor

      if(qrCodeMessage.substring(0,6)==="player"){
        checkName(qrCodeMessage.substring(6,10));
        startTimer(timeout-600);
        scanner.style.visibility = "hidden";
      }
      else if(qrCodeMessage.substring(0,3)==="bar") {
        fillLocation();
      }
        /*
        let ID;
        let code;
        for(let i = 0; i < 6; i++){
          ID = 100 + i;
          code = document.getElementById(ID.toString());
          code.innerHTML = codelijst[i];
          code.style.backgroundColor = "#90FF20";
          codecracked[i] = 1;
          localStorage.setItem("code",JSON.stringify(codecracked));
        }*/


      /*
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
        //localStorage.setItem('fase', fase.toString());
        scanner.style.visibility = "hidden";

      }
       */

  }
}



/*
function playButton() {
  minecraftbutton.play();
}

*/


