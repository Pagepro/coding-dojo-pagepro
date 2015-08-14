'use strict';

var replaceNumbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten'
];

var tens = [
  'ten',
  'twenty',
  'thirty'
  'fourty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
];

function replaceTens(tens) {
  var replaced = '';
  switch (tens) {
    case 10:
      replaced = 'ten'
      break;
    case 11:
      replaced = 'eleven';
      break;
    case 20:
      replaced = 'twenty';
      break;
    case 30: 
      replaced = 'thirty';
      break;
    case 40:
      replaced = 'fourty';
      break;
    case 50:
      replaced = 'fifty'
  }
}
