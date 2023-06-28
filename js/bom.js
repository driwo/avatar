window.onload = function() {
  var timerElement = document.getElementById("timer");
  var redLightElement = document.querySelector('.circle::before');
  var seconds = 9;
  var milliseconds = seconds * 1000;
  var interval;

  function updateTimer() {
    var minutes = Math.floor(milliseconds / 60000);
    var remainingSeconds = Math.floor((milliseconds % 60000) / 1000);

    timerElement.innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + remainingSeconds).slice(-2);

    if (milliseconds > 0) {
      milliseconds -= 1000;
    }
    else {
      clearInterval(interval);
      window.location.href = "index.html";
      redLightElement.style.display = "none";
    }
  }
  interval = setInterval(updateTimer, 1000);
};
