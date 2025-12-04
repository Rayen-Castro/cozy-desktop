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

window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    Actbienvenida();
    cambiargif();
};
