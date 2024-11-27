// Grab the start, stop, reset buttons and the timer display
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

// Initialize the interval variable and set the initial time (25 minutes)
let interval;
let timeLeft = 2700;

// Function to update the timer display
function updateTimer() {
    // Calculate minutes and seconds from the remaining time
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    // Format the time to always show two digits
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;

    // Update the timer element with the formatted time
    timerEl.innerHTML = formattedTime;
}

// Function to start the timer
function startTimer() {
    // Set an interval to decrease the time every second
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        // When time runs out, stop the timer and alert the user
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            // Reset the time for the next session
            timeLeft = 2700;
            updateTimer();
        }
    }, 1000);
}

// Function to stop the timer
function stopTimer() {
    clearInterval(interval);
}

// Function to reset the timer
function resetTimer() {
    clearInterval(interval);
    // Reset the time to the initial 25 minutes
    timeLeft = 2700;
    updateTimer();
}

// Add event listeners to the buttons to start, stop, and reset the timer
startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);