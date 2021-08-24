"use strict";
const button = document.querySelector(".button");

function buttonSelect() {
  button.classList.toggle("color2");
}

button.addEventListener("click", buttonSelect);
