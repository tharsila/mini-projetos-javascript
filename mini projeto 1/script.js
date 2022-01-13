const turnOnOff = document.getElementById('btnOnOff');
const lamp = document.getElementById('lamp');

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('click', lampOn);
lamp.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken);
lamp.addEventListener('mouseenter', lampOn);
lamp.addEventListener('mouseleave', lampOff);

function lampOnOff() {
    if(turnOnOff.innerHTML == 'Ligar') {
        lampOn();
        turnOnOff.innerHTML = 'Desligar';
    } else {
        lampOff();
        turnOnOff.innerHTML = 'Ligar';
    }
}

function lampOn() {
    if(!isLampBroken()) {

        lamp.src = 'img/ligada.jpg';
        turnOnOff.innerHTML = 'Desligar';
    }
}

function lampOff() {
    if(!isLampBroken()) {

        lamp.src = 'img/desligada.jpg';
        turnOnOff.innerHTML = 'Ligar';
    }
}

function lampBroken() {
    lamp.src = 'img/quebrada.jpg'
}

function isLampBroken () {
    return lamp.src.includes('quebrada');
}