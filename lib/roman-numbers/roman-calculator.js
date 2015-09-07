'use strict';

function checkValueOfChar(char) {
  var romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  var ch = char.toUpperCase();
  var romanChars = 'IVXLCDM';
  if (romanChars.indexOf(ch) > -1) {
    return romanValues[ch];
  }
  return 0;
}

function checkIfRomanNumber(argument) {
  var testedString = argument.toUpperCase();
  var result = true;
  for (var i = 0; i < argument.length; i++) {
    if (!checkValueOfChar(testedString.split('')[i])) {
      result = false;
    }
  }
  return result;
}

module.exports = {
  checkValueOfChar: checkValueOfChar,
  checkIfRomanNumber: checkIfRomanNumber
};
