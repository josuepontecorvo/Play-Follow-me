const dot = document.getElementById('player')
const score = document.getElementById('score');
const time = document.getElementById('time');
dot.addEventListener('mouseover', (sumarPuntos));

let puntos = 0;
let tiempo = 60;

function sumarPuntos () {
    puntos++;
    score.innerHTML = `Puntos: <b>${puntos}</b> / 30` ;
    let randomNumber1 = Math.random() * 458;
    let randomNumber2 = Math.random() * 458;
    dot.style.marginTop = randomNumber1 + 'px' ;
    dot.style.marginLeft = randomNumber2 + 'px' ;
    if (puntos == 30) {
        score.innerHTML = 'GANASTE!!!!';
    }
}

const button = document.getElementById('reset');
button.addEventListener('click', reset);

function reset () {
    puntos = 0;
    score.innerHTML = '';
    dot.style.margin = 0 + 'px' ;
    tiempo = 60
}

function restarTiempo () {
    tiempo <= 0 ? score.innerHTML = 'Perdiste' :  tiempo -- ; 
    score.innerHTML == 'GANASTE!!!!' ? time.innerHTML = '' : time.innerHTML = ` Restan: ${tiempo} / 60`;
};

setInterval (restarTiempo, 1000);