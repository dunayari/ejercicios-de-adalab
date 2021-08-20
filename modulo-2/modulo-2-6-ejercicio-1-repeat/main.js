"use strict";
const paragraph = document.querySelector(".paragraph");
const adalaber1 = {
  name: "Susana",
  age: 34,
  profesion: "periodista",
};

//Ejercicio 1 primera parte//
//paragraph.innerHTML = `${adalaber1.name}, ${adalaber1.age} años, ${adalaber1.profesion}`;///

//Ejercicio 1 segunda parte//
paragraph.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profesion}`;

//Ejercicio 1 3ª parte///
const adalaber2 = {
  name: "Rocío",
  age: 25,
  profesion: "actriz",
};
paragraph.innerHTML = `${adalaber2.name}, ${adalaber2.age} años, ${adalaber2.profesion}`;
