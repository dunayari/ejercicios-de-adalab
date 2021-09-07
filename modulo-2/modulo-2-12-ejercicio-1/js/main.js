"use strict";
const listElement = document.querySelector(".js-list");
const numbers = [1, 2, 3];
for (const number of numbers) {
  const newLi = document.createElement("li");
  const newContent = document.createTextNode(number);

  newLi.appendChild(newContent);
  listElement.appendChild(newLi);
}
