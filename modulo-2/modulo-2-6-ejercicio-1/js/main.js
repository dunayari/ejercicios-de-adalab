"use strict";

const adalaber1 = {
  name: "Susana",
  age: 34,
  profesion: "periodista",
  run: function () {
    const phrase = "Estoy corriendo";
    console.log(phrase);
  },
  runMarathon: function (distance) {
    console.log(`Estoy corriendo una marathon de ${distance}`);
  },
};
adalaber1.run();
adalaber1.runMarathon(50);

console.log(
  `Mi nombre es ${adalaber1.name} , tengo ${adalaber1.age} años , y soy ${adalaber1.profesion}`
);

const adalaber2 = {
  name: "Rocío",
  age: "25 años",
  profesion: "actriz",
};
console.log(`${adalaber2.name} , ${adalaber2.age} , ${adalaber2.profesion}`);

const adalaber1 = {};
adalaber1.run = (phrase) => `Estoy ${phrase}`;

console.log(adalaber1.run("corriendo"));
