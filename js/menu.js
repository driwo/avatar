clearscore = document.getElementById('clearscore');
clearscore.addEventListener("click", clearScore);
clearspeler = document.getElementById('clearspelers');
clearspeler.addEventListener("click", clearSpelers);

let score;
if(isNaN(parseInt(localStorage.getItem('score'))) || parseInt(localStorage.getItem('score')) === null){
    score = 0;
}
else{
    score =  parseInt(localStorage.getItem('score'));
}
document.getElementById('result').innerHTML = "Score: " + score;

function clearScore(){
    localStorage.removeItem('score');
    localStorage.removeItem('myArray');
    document.getElementById('result').innerHTML = "Score: 0";
}

function clearSpelers(){
    hitlijst = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const newStoredA = JSON.stringify(hitlijst);
    localStorage.setItem('hitlijst', newStoredA);
}