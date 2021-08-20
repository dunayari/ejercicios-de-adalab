"use strict";
function getEl(selector) {
  const yourJsConst = document.querySelector(selector);
  return yourJsConst;
}

const mainTitle = getEl(".main_title");
console.log(main_title);
