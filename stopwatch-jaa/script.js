document.addEventListener('DOMContentLoaded', () => {
    // Stopwatch Variables
    let stopwatchInterval;
    let stopwatchStartTime;
    let stopwatchElapsedTime = 0;
    let isStopwatchRunning = false;

    // Countdown Timer Variables
    let countdownInterval;
    let countdownTime;
    let countdownRemainingTime;
    let isCountdownRunning = false;

    // Stopwatch Elements
    const stopwatchDisplay = document.getElementById('stopwatch-display');
    const startStopwatch = document.getElementById('startStopwatch');
    const stopStopwatch = document.getElementById('stopStopwatch');
    const resetStopwatch = document.getElementById('resetStopwatch');

    // Countdown Timer Elements
    const countdownDisplay = document.getElementById('countdown-display');
    const countdownInput = document.getElementById('countdown-input');
    const timeUnit = document.getElementById('time-unit');
    const increaseTime = document.getElementById('increaseTime');
    const decreaseTime = document.getElementById('decreaseTime');
    const startCountdown = document.getElementById('startCountdown');
    const pauseCountdown = document.getElementById('pauseCountdown');
    const resetCountdown = document.getElementById('resetCountdown');

    // Helper Functions
    function formatTime(ms) {
        const date = new Date(ms);
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    function startStopwatchTimer() {
        stopwatchStartTime = Date.now() - stopwatchElapsedTime;
        stopwatchInterval = setInterval(() => {
            stopwatchElapsedTime = Date.now() - stopwatchStartTime;
            stopwatchDisplay.textContent = formatTime(stopwatchElapsedTime);
        }, 10);
    }

    function stopStopwatchTimer() {
        clearInterval(stopwatchInterval);
    }

    function resetStopwatchTimer() {
        clearInterval(stopwatchInterval);
        stopwatchElapsedTime = 0;
        stopwatchDisplay.textContent = '00:00:00.000';
    }

    function startCountdownTimer() {
        countdownRemainingTime = countdownTime * 1000;
        countdownInterval = setInterval(() => {
            countdownRemainingTime -= 10;
            countdownDisplay.textContent = formatTime(countdownRemainingTime);
            if (countdownRemainingTime <= 0) {
                clearInterval(countdownInterval);
                countdownDisplay.textContent = '00:00:00.000';
                alert('⏲️ Time\'s up!');
            }
        }, 10);
    }

    function stopCountdownTimer() {
        clearInterval(countdownInterval);
    }

    function resetCountdownTimer() {
        clearInterval(countdownInterval);
        countdownDisplay.textContent = '00:00:00.000';
        countdownInput.value = '';
    }

    // Stopwatch Event Listeners
    startStopwatch.addEventListener('click', () => {
        if (!isStopwatchRunning) {
            startStopwatchTimer();
            isStopwatchRunning = true;
        }
    });

    stopStopwatch.addEventListener('click', () => {
        if (isStopwatchRunning) {
            stopStopwatchTimer();
            isStopwatchRunning = false;
        }
    });

    resetStopwatch.addEventListener('click', () => {
        resetStopwatchTimer();
        isStopwatchRunning = false;
    });

    // Countdown Timer Event Listeners
    startCountdown.addEventListener('click', () => {
        if (!isCountdownRunning) {
            countdownTime = parseInt(countdownInput.value);
            if (isNaN(countdownTime) || countdownTime <= 0) {
                alert('Please enter a valid time.');
                return;
            }
            switch (timeUnit.value) {
                case 'seconds':
                    break;
                case 'minutes':
                    countdownTime *= 60;
                    break;
                case 'hours':
                    countdownTime *= 3600;
                    break;
            }
            startCountdownTimer();
            isCountdownRunning = true;
        }
    });

    pauseCountdown.addEventListener('click', () => {
        if (isCountdownRunning) {
            stopCountdownTimer();
            isCountdownRunning = false;
        }
    });

    resetCountdown.addEventListener('click', () => {
        resetCountdownTimer();
        isCountdownRunning = false;
    });

    increaseTime.addEventListener('click', () => {
        let currentValue = parseInt(countdownInput.value) || 0;
        countdownInput.value = currentValue + 1;
    });

    decreaseTime.addEventListener('click', () => {
        let currentValue = parseInt(countdownInput.value) || 0;
        if (currentValue > 0) {
            countdownInput.value = currentValue - 1;
        }
    });
});
