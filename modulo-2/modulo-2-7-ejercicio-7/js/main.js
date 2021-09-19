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

  for (let i = 0; i <= adalabers.length - 1; i++) {
    let adalabersAge = adalabers[i].age;

    sumAge = sumAge + adalabersAge;
  }

  const average = sumAge / adalabers.length;
  return average;
}

console.log(`La edad media de las adalabers es de ${averageAge()}`);

function theYoungest() {
  let youngAdalaber = 0;
  let youngest = adalabers[youngAdalaber].age;
  let youngestName = adalabers[youngAdalaber].name;

  for (let i = 1; i < adalabers.length; i++) {
    if (youngest > adalabers[i].age) {
      youngest = adalabers[i].name;
    }
  }
  return youngestName;
}
console.log(`${theYoungest()}`);

function countDesigners() {
  let designers = 0;
  let numberOfDesigners = adalabers[designers].job;

  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].job === 'diseñadora') {
      designers = designers + 1;
    }
  }
  return designers;
}

console.log(`${countDesigners()}`);
