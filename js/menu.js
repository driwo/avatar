clearscore = document.getElementById('clearscore');
clearscore.addEventListener("click", clearScore);

function clearScore(){
    localStorage.removeItem('score');
}