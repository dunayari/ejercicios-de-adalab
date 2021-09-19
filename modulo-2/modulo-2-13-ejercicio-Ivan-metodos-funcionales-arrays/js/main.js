"use strict";

let data = [];

fetch("//api.garrido.es/promo-nerea.json")
  .then((response) => response.json())
  .then((dataApi) => {
    data = dataApi;
    render();
  });
