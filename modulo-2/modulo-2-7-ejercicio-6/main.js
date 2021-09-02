"use strict";
let movies = document.querySelector(".movies");
let button = document.querySelector(".button");
let respuesta = document.querySelector(".paragraph");

const myFavouriteFilm = [];

function inputHandler() {
  myFavouriteFilm[0] = movies.value;
}
console.log(movies);
for (const myFavouriteFilms of myFavouriteFilm) {
  console.log(
    "A mí también me encanta" + myFavouriteFilms + "Tenemos mucho en común"
  );
}
button.addEventListener("click", inputHandler);
