"use strict";
const button = document.querySelector(".js-button");

function handleButton(ev) {
  fetch("https://api.github.com/orgs/Adalab")
    .then((response) => response.json())
    .then((data) => data.repos_url)
    .then((data) => {
      document.querySelector(".infoWeb").innerHTML = data.name;
    });
}

button.addEventListener("click", handleButton);
