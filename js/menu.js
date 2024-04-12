clearscore = document.getElementById('clearscore');
//clearscore.addEventListener("click", clearScore);
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

function clearScore(){
    fase = 1;
    localStorage.setItem('fase', fase.toString());
    localStorage.removeItem('myArray');
    document.getElementById('result').innerHTML = "fase: 1";
}*/

function clearSpelers(){
    hitlijst = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const newStoredA = JSON.stringify(hitlijst);
    localStorage.setItem('hitlijst', newStoredA);
}