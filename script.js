let segundos = 0;
let intervalo = null;

const display = document.getElementById('display');

function iniciar() {
    if (intervalo) return;

    intervalo = setInterval(() => {
        segundos++;
        display.textContent = segundos;
        }, 1000);
}

function parar() {
    clearInterval(intervalo);
    intervalo = null;
}

document.getElementById('btnIniciar').addEventListener('click', iniciar);
document.getElementById('btnParar').addEventListener('click', parar);
