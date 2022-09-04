import Countdown from './countdown.js';

const tempoParaOSeteDeSetembro = new Countdown("07 September 2022 20:00:00 GMT-0300");
const tempos = document.querySelectorAll('[data-time]');

function mostrarTempo(){
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaOSeteDeSetembro.total[index]
    });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);


