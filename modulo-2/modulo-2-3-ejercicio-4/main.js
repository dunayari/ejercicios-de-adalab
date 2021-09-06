"use strict";
let dogAge = 4;
let humanAge;

if (dogAge <= 1) {
  humanAge = 15;
  console.log("La edad humana es" + humanAge);
} else if (dogAge > 1 && dogAge >= 2) {
  humanAge = 9;
  console.log("La edad humana es" + humanAge);
} else {
  humanAge = dogAge * 5;
  console.log("La edad humana es" + humanAge);
}
