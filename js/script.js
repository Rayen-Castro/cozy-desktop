const bienvenida = document.getElementById("bienvenida");
const gifbienvenida = document.getElementById("gif-bienvenida");

function cambiargif() {
    const gifs = [
    "https://i.gifer.com/1FP5.gif",
    "https://i.gifer.com/5BuS.gif"
    ];

    const randomIndex = Math.floor(Math.random() * gifs.length);
    gifbienvenida.src = gifs[randomIndex];
}

// Widget: Bienvenida
function Actbienvenida() {
    const hour = new Date().getHours();
    let msg = "";

    if (hour < 6) msg = "¡Deberías estar durmiendo!";
    else if (hour < 12) msg = "¡Buenos días, Ray!";
    else if (hour < 19) msg = "¡Buenas tardes, Ray!";
    else msg = "¡Buenas noches, Ray!";

    bienvenida.textContent = msg;
}

// modo claro/oscuro
const themeBtn = document.getElementById("cambiar-tema");

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};


document.getElementById("openPomodoro").onclick = () => {
    document.getElementById("pomodoroWidget").style.display = "flex";
};

document.getElementById("closePomodoro").onclick = () => {
    document.getElementById("pomodoroWidget").style.display = "none";
};


// --- Pomodoro Start / Pause / Resume / Reset ---

let initialTime = 5;  // tiempo inicial
let timeLeft = initialTime;
let interval = null;
let isPaused = false;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

const openWidget = document.getElementById("openPomodoro");
const widget = document.getElementById("pomodoroWidget");
const closeBtn = document.getElementById("closePomodoro");


// ------ Formatea mm:ss ------
function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// ------ Actualiza pantalla ------
function renderTime() {
    timeDisplay.textContent = formatTime(timeLeft);
}


// ------ Start / Resume ------
function startPomodoro() {
    if (interval) return;

    interval = setInterval(() => {
        timeLeft--;
        renderTime();

        if (timeLeft <= 0) {
            clearInterval(interval);
            interval = null;
            startBtn.textContent = "Empezar";
            alert("¡Tiempo terminado!");
        }
    }, 1000);

    startBtn.textContent = "Pausar";
    isPaused = false;
}


// ------ Pausa ------
function pausePomodoro() {
    clearInterval(interval);
    interval = null;
    startBtn.textContent = "Reanudar";
    isPaused = true;
}


// ------ Reset ------
function resetPomodoro() {
    clearInterval(interval);
    interval = null;
    timeLeft = initialTime;
    isPaused = false;
    startBtn.textContent = "Empezar";
    renderTime();
}


// ------ Comportamiento del botón principal ------
startBtn.addEventListener("click", () => {
    if (!interval && !isPaused) {
        startPomodoro(); // iniciar por primera vez
    } else if (interval) {
        pausePomodoro(); // pausar
    } else if (!interval && isPaused) {
        startPomodoro(); // reanudar
    }
});

resetBtn.addEventListener("click", resetPomodoro);


// ------ Abrir y cerrar widget ------
openWidget.addEventListener("click", () => {
    widget.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    widget.style.display = "none";
});


// Render inicial
renderTime();



window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    Actbienvenida();
    cambiargif();
};
