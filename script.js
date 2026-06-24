let segundos = 0;
let intervalo = null;
const display = document.getElementById('display');

function iniciar() {
    if (intervalo) return;

    intervalo = setInterval(() => {
        segundos++;
        display.textContent = segundos;
        console.log("contando:", segundos);
        }, 1000);
}

function parar() {
    clearInterval(intervalo);
    intervalo = null;
}

function resetar() {
    parar();
    segundos = 0;
    display.textContent = "0";
}
document.getElementById('btnIniciar').addEventListener('click', iniciar);
document.getElementById('btnParar').addEventListener('click', parar);
document.getElementById('btnZerar').addEventListener('click', resetar);
