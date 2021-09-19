'use strict';
const favoritesFilms = document.querySelector('.js-favorites-films');

const button = document.querySelector('.js-button');

const answer = document.querySelector('.paragraph');
let favorites = [];
function handleMessageForFilm(ev) {
  favorites = favoritesFilms.value;

  for (const eachFilm of favorites) {
    return (answer.innerHTML += `Me encantó ${favorites}, tenemos mucho en común`);
  }
}

button.addEventListener('click', handleMessageForFilm);
