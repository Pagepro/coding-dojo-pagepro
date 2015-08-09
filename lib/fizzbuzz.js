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

function fizzBuzz(number) {
  return fizz(number) + buzz(number);
}


module.exports = {
  fizz: fizz,
  buzz: buzz,
  fizzBuzz: fizzBuzz
};
