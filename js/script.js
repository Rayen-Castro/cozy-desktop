const bienvenida = document.getElementById("bienvenida");

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
const themeBtn = document.querySelector(".cambiar-tema");

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};

window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    Actbienvenida();
};
