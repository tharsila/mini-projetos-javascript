const text = document.querySelector('[data-content="text"');
const btn = document.querySelector('[data-content="btn"]');
const url = 'https://api.chucknorris.io/jokes/random';

function getRandomJoke() {
  axios.get(url)
  .then(response => {
    text.innerHTML = response.data.value
  }).catch(erro => {
    console.log(erro)
  })
}

getRandomJoke()

btn.addEventListener('click', getRandomJoke);