'use strict';

jest.dontMock('../roman-calculator.js');

var romanCalculator = require('../roman-calculator.js');

describe('Roman Numbers Calculator', function() {
  it('should return nothing at the moment because it\'s a stupid mock', function() {
    expect(romanCalculator.init()).toEqual(undefined);
  });
});
