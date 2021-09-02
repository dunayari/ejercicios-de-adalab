"use strict";

let oneHundred = [];

function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    oneHundred.push(i);
  }
  console.log(oneHundred);
}

get100Numbers();

function getReversed100Numbers() {
  const hello = oneHundred.reverse();
  console.log(hello);
}

getReversed100Numbers();
