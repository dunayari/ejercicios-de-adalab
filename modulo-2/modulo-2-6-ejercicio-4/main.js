"use strict";
const button = document.querySelector(".button");

function pressButton(event) {
  console.log(event);
}
button.addEventListener("click", pressButton);
