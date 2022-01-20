const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let indexColors = 0;
let intervalId = null;

const turnOnLights = (event) => {
  turnOffAutomatic ();
  turnON[event.target.id] ();
}

const nextIndex = () => {
  if (indexColors < 2) {
    indexColors++;
  } else {
    indexColors = 0;
  } 
}

const changeColor = () => {
  const colors = ['red','yellow','green'];
  const color = colors[indexColors];
  turnON[color] ();
  nextIndex();
}

const turnOffAutomatic = () => {
  clearInterval (intervalId);
}

const turnON = {
  'red':       () => img.src = 'img/vermelho.png',
  'yellow':    () => img.src = 'img/amarelo.png',
  'green':     () => img.src = 'img/verde.png',
  'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', turnOnLights);

