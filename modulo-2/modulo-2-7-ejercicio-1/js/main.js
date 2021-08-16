"use strict";
function workWithMovies() {
  const movies = ["Martín, hache", "El club de la lucha", "Mi vida sin mí"];
  movies[3] = "Abierto hasta el amanecer";
  movies[3] = "Todo sobre mi madre";
  console.log(movies);
}
workWithMovies();
workWithMovies();

const list = [];
for (let i = 0; i < 10; i++) {
  list[i] = i + 1;
  console.log(list);
}
