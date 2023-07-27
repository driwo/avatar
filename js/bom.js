let timer = document.getElementById('timer');
timer.style.display = "none";
function startBom() {
  timer.style.display = "block";
  var timerElement = document.getElementById("timer");
  //var redLightElement = document.querySelector('.circle::before');
  var seconds = 69;
  var milliseconds = seconds * 1000;
  var interval;

  function updateTimer() {
    var minutes = Math.floor(milliseconds / 60000);
    var remainingSeconds = Math.floor((milliseconds % 60000) / 1000);

    timerElement.innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + remainingSeconds).slice(-2);
    if( (milliseconds/1000) % 2 !== 0){
      timer.style.color = "#EC2247";
    }
    else{
      timer.style.color = "white";
    }

    if (milliseconds > 10500) {
      milliseconds -= 1000;
    }
    else if(milliseconds < 10500 && milliseconds > 0){
      timer.style.color = "#0080FF";
      bomActive = 1;
      milliseconds -= 1000;
    }
    else {
      milliseconds = 70000;
      timer.style.color = "white";
      bomActive = 0;
      clearInterval(interval);
      updateTimer();
    }
  }
  interval = setInterval(updateTimer, 1000);
}
