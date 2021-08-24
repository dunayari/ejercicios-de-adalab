"use strict";
const button = document.querySelector(".button");
const secondButton = document.querySelector(".second_button");

function buttonSelect(event) {
  const selectedButton = event.currentTarget;
  selectedButton.classList.toggle("color2");
}

button.addEventListener("click", buttonSelect);
secondButton.addEventListener("click", buttonSelect);
