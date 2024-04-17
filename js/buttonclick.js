let buttons = document.querySelectorAll('button');

const codelijst = ["6","5","4","3","2","1"];
let codecracked = [0,0,0,0,0,0];



if(localStorage.getItem("codecracked")){
  const cc = JSON.parse(localStorage.getItem("codecracked"));
  for(let i = 0; i < 6; i++){
    if(cc[i]){
      let id = 100 + i;
      let c = document.getElementById(id.toString());
      c.innerHTML = codelijst[i];
      c.style.backgroundColor = "#90FF20";
    }
  }
}
else{
  localStorage.setItem('codecracked', JSON.stringify(codecracked));
}

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

      if(qrCodeMessage.substring(0,6)==="player"){
        checkName(qrCodeMessage.substring(6,10));
        startTimer(timeout-600);
        scanner.style.visibility = "hidden";
      }
      else if(qrCodeMessage.substring(0,3)==="bar") {
        fillLocation(qrCodeMessage.substring(3,8));
      }
          }
}


