"use strict";
/*apartado a*/

let numbers = [2, 6, 8, 4, 9];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i];
}
let media = acc / numbers.length;
console.log(`La media es:` + media);

/*apartado b*/
let numbers = [2, 6, 8, 4, 9, 12];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
  acc = numbers[i];
}
let media = acc / numbers.length;
console.log(`La media es:` + media);
