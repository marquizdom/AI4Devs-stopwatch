document.addEventListener('DOMContentLoaded', () => {
    // Main page buttons
    const stopwatchBtn = document.getElementById('stopwatch-btn');
    const countdownBtn = document.getElementById('countdown-btn');

    // Stopwatch elements
    const stopwatch = document.getElementById('stopwatch');
    const stopwatchDisplay = document.getElementById('stopwatch-display');
    const startStopwatchBtn = document.getElementById('start-stopwatch');
    const clearStopwatchBtn = document.getElementById('clear-stopwatch');
    const backStopwatchBtn = document.getElementById('back-stopwatch');

    // Countdown elements
    const countdown = document.getElementById('countdown');
    const countdownDisplay = document.getElementById('countdown-display');
    const countdownInput = document.getElementById('countdown-input');
    const setCountdownBtn = document.getElementById('set-countdown');
    const clearCountdownBtn = document.getElementById('clear-countdown');
    const backCountdownBtn = document.getElementById('back-countdown');
    const numberButtons = document.querySelectorAll('.number-btn');
    const backspaceBtn = document.getElementById('backspace-btn');

    // Global buttons
    const helpBtn = document.getElementById('help-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const bookmarkBtn = document.getElementById('bookmark-btn');

    // Help elements
    const helpPage = document.getElementById('help');
    const backHelpBtn = document.getElementById('back-help');

    let stopwatchInterval;
    let stopwatchTime = 0;
    let stopwatchRunning = false;

    let countdownInterval;
    let countdownTime = 0;
    let countdownRunning = false;

    stopwatchBtn.addEventListener('click', () => {
        hideAllSections();
        stopwatch.classList.remove('hidden');
    });

    countdownBtn.addEventListener('click', () => {
        hideAllSections();
        countdown.classList.remove('hidden');
    });

    startStopwatchBtn.addEventListener('click', () => {
        if (stopwatchRunning) {
            clearInterval(stopwatchInterval);
            stopwatchRunning = false;
            startStopwatchBtn.textContent = 'Continue';
            startStopwatchBtn.classList.remove('pause');
            startStopwatchBtn.classList.add('continue');
        } else {
            stopwatchRunning = true;
            startStopwatchBtn.textContent = 'Pause';
            startStopwatchBtn.classList.remove('continue');
            startStopwatchBtn.classList.add('pause');
            stopwatchInterval = setInterval(() => {
                stopwatchTime += 10;
                updateDisplay(stopwatchDisplay, stopwatchTime);
            }, 10);
        }
    });

    clearStopwatchBtn.addEventListener('click', () => {
        clearInterval(stopwatchInterval);
        stopwatchTime = 0;
        updateDisplay(stopwatchDisplay, stopwatchTime);
        stopwatchRunning = false;
        startStopwatchBtn.textContent = 'Start';
        startStopwatchBtn.classList.remove('pause', 'continue');
        startStopwatchBtn.classList.add('start');
    });

    backStopwatchBtn.addEventListener('click', () => {
        hideAllSections();
        document.querySelector('.container').classList.remove('hidden');
    });

    setCountdownBtn.addEventListener('click', () => {
        if (countdownRunning) {
            clearInterval(countdownInterval);
            countdownRunning = false;
            setCountdownBtn.textContent = 'Continue';
            setCountdownBtn.classList.remove('pause');
            setCountdownBtn.classList.add('continue');
        } else {
            if (!countdownRunning && countdownTime === 0) {
                const inputTime = countdownInput.value.split(':').reverse();
                countdownTime = 0;
                let multiplier = 1;
                inputTime.forEach((time) => {
                    countdownTime += parseInt(time, 10) * multiplier;
                    multiplier *= 60;
                });
                countdownTime *= 1000;
            }

            countdownRunning = true;
            setCountdownBtn.textContent = 'Pause';
            setCountdownBtn.classList.remove('continue');
            setCountdownBtn.classList.add('pause');
            countdownInterval = setInterval(() => {
                if (countdownTime > 0) {
                    countdownTime -= 10;
                    updateDisplay(countdownDisplay, countdownTime);
                } else {
                    clearInterval(countdownInterval);
                    countdownRunning = false;
                    setCountdownBtn.textContent = 'Set';
                    setCountdownBtn.classList.remove('pause', 'continue');
                    setCountdownBtn.classList.add('start');
                }
            }, 10);
        }
    });

    clearCountdownBtn.addEventListener('click', () => {
        clearInterval(countdownInterval);
        countdownTime = 0;
        updateDisplay(countdownDisplay, countdownTime);
        countdownRunning = false;
        countdownInput.value = '';
        setCountdownBtn.textContent = 'Set';
        setCountdownBtn.classList.remove('pause', 'continue');
        setCountdownBtn.classList.add('start');
    });

    backCountdownBtn.addEventListener('click', () => {
        hideAllSections();
        document.querySelector('.container').classList.remove('hidden');
    });

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            countdownInput.value += button.textContent;
        });
    });

    backspaceBtn.addEventListener('click', () => {
        countdownInput.value = countdownInput.value.slice(0, -1);
    });

    helpBtn.addEventListener('click', () => {
        hideAllSections();
        helpPage.classList.remove('hidden');
    });

    backHelpBtn.addEventListener('click', () => {
        hideAllSections();
        document.querySelector('.container').classList.remove('hidden');
    });

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });

    bookmarkBtn.addEventListener('click', () => {
        alert('Press Ctrl+D to bookmark this page.');
    });

    function hideAllSections() {
        stopwatch.classList.add('hidden');
        countdown.classList.add('hidden');
        helpPage.classList.add('hidden');
        document.querySelector('.container').classList.add('hidden');
    }

    function updateDisplay(displayElement, time) {
        const date = new Date(time);
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
        displayElement.textContent = `${hours}:${minutes}:${seconds} ${milliseconds}`;
    }
});
