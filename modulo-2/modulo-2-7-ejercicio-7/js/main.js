'use strict';

let adalabers = [
  {
    name: 'María',
    age: 29,
    job: 'diseñadora',
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'ingeniera química',
  },
  {
    name: 'Susana',
    age: 34,
    job: 'periodista',
  },
  {
    name: 'Rocío',
    age: 25,
    job: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora',
  },
];

function countAdalabers() {
  const length = adalabers.length;
  return length;
}

console.log(`El número de adalabers es: ${countAdalabers()}`);

function averageAge() {
  let sumAge = 0;

  for (let eachAge of adalabers) {
    eachAge = adalabers.age;

    sumAge = sumAge + eachAge;
  }

  const average = sumAge / adalabers.length;
  return average;
}

console.log(`La edad media de las adalabers es de ${averageAge()}`);

function theYoungest() {
  let youngAdalaber = 0;
  let youngest = adalabers[youngAdalaber].age;
  let youngestName = adalabers[youngAdalaber].name;

  for (const young of adalabers) {
    if (young > adalabers.age) {
      youngest = adalaber.name;
    }
  }
  return youngestName;
}
console.log(`${theYoungest()}`);

function countDesigners() {
  let designers = 0;

  for (let design of adalabers) {
    if (design.job === 'diseñadora') {
      designers = designers + 1;
    }
  }
  return designers;
}

console.log(`${countDesigners()}`);
