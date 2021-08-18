"use strict";
let humanAge = 4;
let dogAge = 0;

if (humanAge === 1) {
  dogAge = 15;
} else if (humanAge === 2) {
  dogAge = 9;
} else if (dogAge <= 3) {
  dogAge = `5*${humanAge}`;
}
console.log(`La edad de mi perro es ${dogAge}`);
