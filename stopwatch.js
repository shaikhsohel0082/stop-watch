//accessing all required elements
const timeDisplay = document.getElementById("timer");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");
let seconds = 0;
let minutes = 0;
let hour = 0;
let timefn;

//adding event handler to start button
startButton.addEventListener("click", () => {
  //   console.log("button clicked");

  timefn = setInterval(() => {
    if (seconds >= 59) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 59) {
      minutes = 0;
      hour++;
    }
    timeDisplay.textContent =
      (hour < 10 ? "0" + hour : hour) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (++seconds < 10 ? "0" + seconds : seconds);
  }, 1000);
});

//adding event handler to stop button
stopButton.addEventListener("click", () => {
  //   console.log("button clicked");
  clearInterval(timefn);
});

//adding event handler to reset button
resetButton.addEventListener("click", () => {
  //   console.log("button clicked");
  seconds = 0;
  minutes = 0;
  hour = 0;
  clearInterval(timefn);
  timeDisplay.textContent = `00:00:00`;
});
