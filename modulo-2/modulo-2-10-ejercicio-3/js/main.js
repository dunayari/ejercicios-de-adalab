"use strict";
const userSearch = document.querySelector(".js-user");
const buttonSearch = document.querySelector(".js-button");

function handleSearchButton(event) {
  event.preventDefault();
  let search = userSearch.value;

  fetch(`https://api.github.com/users/${search}`)
    .then((response) => response.json())
    .then((data) => {
      const userName = document.querySelector(".js_userName");
      userName.innerHTML = data.name;
      const repos = document.querySelector(".js_repos");
      repos.innerHTML = data.public_repos;
      const img = document.querySelector(".js_img");
      img.src = data.avatar_url;
      img.alt = "Avatar de " + userName.innerHTML;
    });
}

buttonSearch.addEventListener("click", handleSearchButton);
