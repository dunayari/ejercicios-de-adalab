"use strict";
const changeParagraph = document.querySelector(".paragraph");
const button = document.querySelector(".button");

function pressButton() {
  changeParagraph.innerHTML =
    "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener("click", pressButton);
