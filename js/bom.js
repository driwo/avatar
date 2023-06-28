window.onload = function() {
  var timerElement = document.getElementById("timer");
  var redLightElement = document.getElementById("red-light");
  var boomTextElement = document.createElement("div");
  boomTextElement.id = "boom-text";
  boomTextElement.innerHTML = "BOOM!";
  document.body.appendChild(boomTextElement);

  var seconds = 9;
  var milliseconds = seconds * 1000;
  var interval;
  var flickerInterval = 5;

  function updateTimer() {
    var minutes = Math.floor(milliseconds / 60000);
    var remainingSeconds = Math.floor((milliseconds % 60000) / 1000);

    timerElement.innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + remainingSeconds).slice(-2);

    if (milliseconds > 0) {
      milliseconds -= 1000;
    } else {
      clearInterval(interval);
      window.location.href = "index.html";
      redLightElement.style.display = "none";
      boomTextElement.style.display = "block";

    }
  }

  function startFlicker() {
      redLightElement.classList.toggle("flicker");
      flickerInterval -= 0.1;
    setTimeout(function() {
      if(milliseconds>0){
        startFlicker();
      }
    }, 2000);
  }

  interval = setInterval(updateTimer, 1000);
  startFlicker();
};
