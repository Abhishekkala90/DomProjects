//Variables
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");
//variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;
//variable for time values;
let seconds = 0;
let minutes = 0;
let hours = 0;
//variable for set interval & timerstatus
let timerInterval = null;
let timerStatus = "stopped";
startStopBtn.addEventListener("click", function () {
  if (timerStatus == "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStopBtn").innerHTML =
      ' <i class="fa-solid fa-pause" id="pause"></i>';

    timerStatus = "started";
  } else if (timerStatus == "started") {
    window.clearInterval(timerInterval);

    timerStatus = "stopped";
    document.getElementById("startStopBtn").innerHTML =
      ' <i class="fa-solid fa-play" id="play"></i>';
  }
});
resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
  timerStatus = "stopped";
  document.getElementById("startStopBtn").innerHTML =
    ' <i class="fa-solid fa-play" id="play"></i>';
});

//stop Watch Function
function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }
  document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}
