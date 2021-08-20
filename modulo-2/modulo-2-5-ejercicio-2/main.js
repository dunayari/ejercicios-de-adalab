"use strict";

const button = document.querySelector(".button");

function handleName() {
  const input = document.querySelector(".input").value;
  console.log(`Hola ${input}`);
}
button.addEventListener("click", handleName);
