// scripts.js

let stopwatchInterval, countdownInterval;
let stopwatchStartTime, countdownEndTime;
let stopwatchRunning = false, countdownRunning = false;
let laps = [];

document.getElementById('stopwatch-start').addEventListener('click', () => {
    if (!stopwatchRunning) {
        stopwatchStartTime = Date.now() - (stopwatchStartTime || 0);
        stopwatchRunning = true;
        runStopwatch();
    }
});

document.getElementById('stopwatch-pause').addEventListener('click', () => {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
});

document.getElementById('stopwatch-reset').addEventListener('click', () => {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
    stopwatchStartTime = null;
    laps = [];
    document.getElementById('stopwatch-display').innerText = "00:00:00.000";
    document.getElementById('stopwatch-laps').innerHTML = "";
});

document.getElementById('stopwatch-lap').addEventListener('click', () => {
    if (stopwatchRunning) {
        const lapTime = Date.now() - stopwatchStartTime;
        laps.push(lapTime);
        const lapElement = document.createElement('div');
        lapElement.innerText = formatTime(lapTime);
        document.getElementById('stopwatch-laps').appendChild(lapElement);
    }
});

document.getElementById('countdown-start').addEventListener('click', () => {
    const countdownInput = document.getElementById('countdown-input').value;
    if (!countdownRunning && countdownInput > 0) {
        countdownEndTime = Date.now() + countdownInput * 1000;
        countdownRunning = true;
        runCountdown();
    }
});

document.getElementById('countdown-pause').addEventListener('click', () => {
    countdownRunning = false;
    clearInterval(countdownInterval);
});

document.getElementById('countdown-reset').addEventListener('click', () => {
    countdownRunning = false;
    clearInterval(countdownInterval);
    document.getElementById('countdown-display').innerText = "00:00:00";
});

function runStopwatch() {
    stopwatchInterval = setInterval(() => {
        if (stopwatchRunning) {
            const elapsedTime = Date.now() - stopwatchStartTime;
            document.getElementById('stopwatch-display').innerText = formatTime(elapsedTime);
        }
    }, 10);
}

function runCountdown() {
    countdownInterval = setInterval(() => {
        if (countdownRunning) {
            const remainingTime = countdownEndTime - Date.now();
            if (remainingTime <= 0) {
                countdownRunning = false;
                clearInterval(countdownInterval);
                alert('Countdown finished!');
            }
            document.getElementById('countdown-display').innerText = formatTime(Math.max(remainingTime, 0));
        }
    }, 10);
}

function formatTime(ms) {
    const milliseconds = ms % 1000;
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
}
