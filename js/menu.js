clearscore = document.getElementById('clearscore');
clearscore.addEventListener("click", clearScore);

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
    document.getElementById('result').innerHTML = "Score: 0";
}