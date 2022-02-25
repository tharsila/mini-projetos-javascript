'use strict'

const images = [
  {'id': '1', 'url': './img/imagem1-min.jpg'},
  {'id': '2', 'url': './img/imagem2-min.jpg'},
  {'id': '3', 'url': './img/imagem3-min.jpg'},
  {'id': '4', 'url': './img/imagem4-min.jpg'},
  {'id': '5', 'url': './img/imagem5-min.jpg'},
  {'id': '6', 'url': './img/imagem6-min.jpg'}
]

const containerItems= document.querySelector('#container-items');

const loadImages = ((images, container) => {

  images.forEach((image) => {

    container.innerHTML += `
      <div class='item'> 
        <img src='${image.url}'
      </div>
    `
  })
  
})

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
  items = document.querySelectorAll('.item');
  containerItems.appendChild(items[0]);
}

const next = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', next);
document.querySelector('#next').addEventListener('click', previous);