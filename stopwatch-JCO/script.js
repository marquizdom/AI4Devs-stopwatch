document.addEventListener('DOMContentLoaded', () => {
    const stopwatchBtn = document.getElementById('stopwatch-btn');
    const countdownBtn = document.getElementById('countdown-btn');
    const selectionScreen = document.getElementById('selection-screen');
    const stopwatchScreen = document.getElementById('stopwatch-screen');
    const countdownScreen = document.getElementById('countdown-screen');

    const backToSelection1 = document.getElementById('back-to-selection1');
    const backToSelection2 = document.getElementById('back-to-selection2');

    const stopwatchDisplay = document.getElementById('stopwatch-display');
    const startStopwatchBtn = document.getElementById('start-stopwatch');
    const pauseStopwatchBtn = document.getElementById('pause-stopwatch');
    const stopStopwatchBtn = document.getElementById('stop-stopwatch');

    const countdownDisplay = document.getElementById('countdown-display');
    const numButtons = document.querySelectorAll('.num-btn');
    const startCountdownBtn = document.getElementById('start-countdown');
    const pauseCountdownBtn = document.getElementById('pause-countdown');
    const stopCountdownBtn = document.getElementById('stop-countdown');

    let stopwatchInterval, countdownInterval;
    let stopwatchTime = 0, countdownTime = 0;
    let countdownInput = '';

    function formatTime(ms) {
        let milliseconds = ms % 1000;
        let totalSeconds = Math.floor(ms / 1000);
        let seconds = totalSeconds % 60;
        let totalMinutes = Math.floor(totalSeconds / 60);
        let minutes = totalMinutes % 60;
        let hours = Math.floor(totalMinutes / 60);

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}<br><small>${String(milliseconds).padStart(3, '0')}</small>`;
    }

    function updateStopwatchDisplay() {
        stopwatchDisplay.innerHTML = formatTime(stopwatchTime);
    }

    function updateCountdownDisplay() {
        countdownDisplay.innerHTML = formatTime(countdownTime);
    }

    function startStopwatch() {
        const startTime = Date.now() - stopwatchTime;
        stopwatchInterval = setInterval(() => {
            stopwatchTime = Date.now() - startTime;
            updateStopwatchDisplay();
        }, 10);
    }

    function startCountdown() {
        const endTime = Date.now() + countdownTime;
        countdownInterval = setInterval(() => {
            countdownTime = endTime - Date.now();
            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
                countdownTime = 0;
            }
            updateCountdownDisplay();
        }, 10);
    }

    stopwatchBtn.addEventListener('click', () => {
        selectionScreen.classList.add('d-none');
        stopwatchScreen.classList.remove('d-none');
    });

    countdownBtn.addEventListener('click', () => {
        selectionScreen.classList.add('d-none');
        countdownScreen.classList.remove('d-none');
    });

    backToSelection1.addEventListener('click', () => {
        stopwatchScreen.classList.add('d-none');
        selectionScreen.classList.remove('d-none');
        clearInterval(stopwatchInterval);
        stopwatchTime = 0;
        updateStopwatchDisplay();
    });

    backToSelection2.addEventListener('click', () => {
        countdownScreen.classList.add('d-none');
        selectionScreen.classList.remove('d-none');
        clearInterval(countdownInterval);
        countdownTime = 0;
        countdownInput = '';
        updateCountdownDisplay();
    });

    startStopwatchBtn.addEventListener('click', () => {
        clearInterval(stopwatchInterval);
        startStopwatch();
    });

    pauseStopwatchBtn.addEventListener('click', () => {
        clearInterval(stopwatchInterval);
    });

    stopStopwatchBtn.addEventListener('click', () => {
        clearInterval(stopwatchInterval);
        stopwatchTime = 0;
        updateStopwatchDisplay();
    });

    numButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (countdownInput.length < 6) {
                countdownInput += button.innerText;
                let hours = countdownInput.slice(0, 2) || '00';
                let minutes = countdownInput.slice(2, 4) || '00';
                let seconds = countdownInput.slice(4, 6) || '00';
                countdownTime = (parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)) * 1000;
                updateCountdownDisplay();
            }
        });
    });

    startCountdownBtn.addEventListener('click', () => {
        clearInterval(countdownInterval);
        startCountdown();
    });

    pauseCountdownBtn.addEventListener('click', () => {
        clearInterval(countdownInterval);
    });

    stopCountdownBtn.addEventListener('click', () => {
        clearInterval(countdownInterval);
        countdownTime = 0;
        countdownInput = '';
        updateCountdownDisplay();
    });
});
