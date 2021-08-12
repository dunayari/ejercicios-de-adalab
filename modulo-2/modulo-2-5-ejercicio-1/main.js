"use strict";
const textPrincipal = document.querySelector(".text");
const button = document.querySelector(".button");

function pressButton() {
  textPrincipal.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener("click", pressButton);
