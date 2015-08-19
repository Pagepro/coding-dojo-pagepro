'use strict';

function fizz(number) {
  if (number % 3 === 0) {
    return 'fizz';
  }
  return '';
}

function buzz(number) {
  if (number % 5 === 0) {
    return 'buzz';
  }
  return '';
}

function kaboom(number) {
  if (number % 4 === 0 && buzz(number)) {
    return 'kaboom';
  }
  return '';
}

function getNumber(number) {
  var temp;
  if (typeof number === 'number') {
    temp = Math.round(number);
  } else {
    temp = parseInt(number, 10);
  }
  if (!isNaN(temp)) {
    return temp;
  }
  return false;
}

function fizzBuzz(number) {
  var dupa = getNumber(number);
  if (dupa) {
    return fizz(dupa) + buzz(dupa) + kaboom(dupa);
  }
  return 'error';
}

module.exports = {
  fizz: fizz,
  buzz: buzz,
  fizzBuzz: fizzBuzz,
  kaboom: kaboom,
  getNumber: getNumber
};
