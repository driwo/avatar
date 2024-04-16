var timerBar = document.getElementById("timer-bar");
function startTimer(timeout) {
  timerBar.style.backgroundColor = "#EC2247";
  var width = 100;
  let decreaseAmount; // Amount to decrease the width by in each interval
  timerBar.style.width = width + "%";

  var intervalDuration = 400; // Interval duration in milliseconds
  decreaseAmount = (intervalDuration*100) / timeout; // Adjust the decrease amount based on the frame count

  var timerInterval = setInterval(frame, intervalDuration); // Update the timer at the specified interval

  function frame() {
    if (width <= 0) {
      clearInterval(timerInterval);
      refillTimer();
      let scanner = document.querySelector('.scanner');
      scanner.style.visibility= "visible";
      scan = 0;
    } else {
      width -= decreaseAmount;
      timerBar.style.width = width + "%";
    }
  }
}

function refillTimer() {
  timerBar.style.backgroundColor = "#90FF20";
  timerBar.style.width = "100%";
}
