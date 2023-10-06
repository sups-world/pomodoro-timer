const timerElement = document.getElementById("timer");

const startElement = document.getElementById("start");
const stopElement = document.getElementById("stop");
const resetElement = document.getElementById("reset");

let interval;
let timeLeft = 1500; //twenty-five minutes

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  let formattedTime = `${minutes.toString().padStart(2, "0")}  :  ${seconds
    .toString()
    .padStart(2, "0")}`;
  timerElement.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      alert("Time's up!!! Take a break!!!");
      clearInterval();
      timeLeft = 1500;
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  console.log("reset");
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startElement.addEventListener("click", startTimer);
stopElement.addEventListener("click", stopTimer);
resetElement.addEventListener("click", resetTimer);
