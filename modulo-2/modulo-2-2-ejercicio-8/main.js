"use strict";

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const firstDog = document.querySelector(".js_first_list");
firstDog.innerHTML = `<img src = ${firstDogImage}>${firstDogName}`;

const secondDog = document.querySelector(".js_second_list");
secondDog.innerHTML = `<img src = ${secondDogImage}>${secondDogName}`;

const thirdDog = document.querySelector(".js_third_list");
thirdDog.innerHTML = `<img src = ${thirdDogImage}>  ${thirdDogName}`;
