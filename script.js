let segundosTotais = 0; 
let intervalo = null;
const display = document.getElementById('display');

function iniciar() {
    if (intervalo) return;

    intervalo = setInterval(() => {
        segundosTotais++;
        const horas = Math.floor(segundosTotais / 3600);
        const minutos = Math.floor((segundosTotais % 3600) / 60);
        const secs = segundosTotais % 60;
        
        const formatoTempo = `${horas}:${String(minutos).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        display.textContent = formatoTempo;
        console.log("contando:", formatoTempo);
    }, 1000);
}

function parar() {
    clearInterval(intervalo);
    intervalo = null;
}

function resetar() {
    clearInterval(intervalo);
    intervalo = null;
    segundosTotais = 0;
    display.textContent = "0:00:00";
    console.log("resetado");
}
document.getElementById('btnIniciar').addEventListener('click', iniciar);
document.getElementById('btnParar').addEventListener('click', parar);
document.getElementById('btnReset').addEventListener('click', resetar);
