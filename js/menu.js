clearcode = document.getElementById('clearcode');
clearcode.addEventListener("click", clearCode);
clearspeler = document.getElementById('clearspelers');
clearspeler.addEventListener("click", clearSpelers);

/*
let fase;
if(isNaN(parseInt(localStorage.getItem('fase'))) || parseInt(localStorage.getItem('fase')) === null){
    fase = 1;
}
else{
    fase = parseInt(localStorage.getItem('fase'));
}
document.getElementById('result').innerHTML = "fase: " + fase;
*/

function clearCode(){
    localStorage.removeItem('code');
}

function clearSpelers(){
    hitlijst = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const newStoredA = JSON.stringify(hitlijst);
    localStorage.setItem('hitlijst', newStoredA);
}