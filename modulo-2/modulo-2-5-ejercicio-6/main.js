"use strict";
const write = document.querySelector(".js_input");
const paragraph = document.querySelector(".js_paragraph");

function handleEvent(event) {
  paragraph.innerHTML = event.currentTarget.value;
}

write.addEventListener("keyup", handleEvent);
