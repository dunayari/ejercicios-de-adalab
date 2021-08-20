"use strict";
function price(a) {
  const priceIva = (a * 21) / 100;
  return `Precio sin IVA: ${a}, IVA: ${priceIva} y Total: ${a + priceIva}`;
}
console.log(price(10));

//¿Por qué no se puede poner Total: ${a}+${priceIva}
