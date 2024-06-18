// Elementos del DOM
const stopwatchBtn = document.getElementById('stopwatchBtn');
const countdownBtn = document.getElementById('countdownBtn');
const timer = document.getElementById('timer');
const keypad = document.getElementById('keypad');
const timeInput = document.getElementById('timeInput');
const controlButtons = document.querySelector('.control-buttons');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');

// Variables de control
let interval;
let elapsedTime = 0;
let countdownTime = 0;
let mode = '';  // 'stopwatch' or 'countdown'

// Función para mostrar los botones de control
function showControlButtons() {
    controlButtons.style.display = 'flex';
}

// Función para ocultar los botones de control
function hideControlButtons() {
    controlButtons.style.display = 'none';
}

// Función para iniciar el cronómetro
function startStopwatch() {
    clearInterval(interval);
    interval = setInterval(() => {
        elapsedTime++;
        updateTimer(elapsedTime);
    }, 1000);
}

// Función para iniciar la cuenta atrás
function startCountdown() {
    clearInterval(interval);
    interval = setInterval(() => {
        if (countdownTime > 0) {
            countdownTime--;
            updateTimer(countdownTime);
        } else {
            clearInterval(interval);
            alert('Tiempo terminado');
        }
    }, 1000);
}

// Función para actualizar la pantalla del temporizador
function updateTimer(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Eventos de los botones de modo
stopwatchBtn.addEventListener('click', () => {
    mode = 'stopwatch';
    hideControlButtons();
    showControlButtons();
    keypad.style.display = 'none';
    timer.textContent = '00:00:00';
    elapsedTime = 0;
    clearInterval(interval);
});

countdownBtn.addEventListener('click', () => {
    mode = 'countdown';
    hideControlButtons();
    showControlButtons();
    keypad.style.display = 'block';
    timer.textContent = '00:00:00';
    countdownTime = 0;
    clearInterval(interval);
});

// Eventos de los botones de control
startBtn.addEventListener('click', () => {
    if (mode === 'stopwatch') {
        startStopwatch();
    } else if (mode === 'countdown') {
        const timeParts = timeInput.value.split(':');
        const minutes = parseInt(timeParts[0], 10);
        const seconds = parseInt(timeParts[1], 10);
        countdownTime = (minutes * 60) + seconds;
        startCountdown();
    }
});

pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    if (mode === 'stopwatch') {
        elapsedTime = 0;
    } else if (mode === 'countdown') {
        countdownTime = 0;
    }
    timer.textContent = '00:00:00';
});