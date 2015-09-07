'use strict';


/**
 *  CHEAT SHEET
 *
 *  JEST
 *  jest.autoMockOff()
 *  jest.autoMockOn()
 *  jest.clearAllTimers()
 *  jest.dontMock(moduleName)
 *  jest.genMockFromModule(moduleName)
 *  jest.genMockFunction()
 *  jest.genMockFn()
 *  jest.mock(moduleName)
 *  jest.runAllTicks()
 *  jest.runAllTimers()
 *  jest.runOnlyPendingTimers()
 *  jest.setMock(moduleName, moduleExports)
 *
 *  Globally injected variables
 *   afterEach(fn)
 *   beforeEach(fn)
 *   describe(name, fn)
 *   it(name, fn)
 *   it.only(name, fn) executes only this test. Useful when investigating a failure
 *   jest
 *   pit(name, fn) helper for promises
 *   require(module)
 *   require.requireActual(module)
 *   xdescribe(name, fn)
 *   xit(name, fn)
 *
 *  expect(value)
 *   .not inverse the next comparison
 *   .toThrow(?message)
 *   .toBe(value) comparison using ===
 *   .toEqual(value) deep comparison. Use jasmine.any(type) to be softer
 *   .toBeFalsy()
 *   .toBeTruthy()
 *   .toBeNull()
 *   .toBeUndefined()
 *   .toBeDefined()
 *   .toMatch(regexp)
 *   .toContain(string)
 *   .toBeCloseTo(number, delta)
 *   .toBeGreaterThan(number)
 *   .toBeLessThan(number)
 *   .toBeCalled()
 *   .toBeCalledWith(arg, um, ents)
 *   .lastCalledWith(arg, um, ents)
 */

jest.dontMock('../roman-calculator.js');

var romanCalculator = require('../roman-calculator.js');

describe('Roman calculator if roman number', function() {
  it('should return true if this is roman number', function() {
    expect(romanCalculator.checkIfRomanNumber('xi')).toBeTruthy();
  });
  it('should return true if this is roman number', function() {
    expect(romanCalculator.checkIfRomanNumber('iv')).toBeTruthy();
  });
  it('should return false if this is roman number', function() {
    expect(romanCalculator.checkIfRomanNumber('aa')).toBeFalsy();
  });
  it('should return false if this is roman number', function() {
    expect(romanCalculator.checkIfRomanNumber('xaa')).toBeFalsy();
  });
});

describe('Roman calculator if given char is number', function() {
  it('should return 1 if we give i', function() {
    expect(romanCalculator.checkValueOfChar('i')).toEqual(1);
  });
  it('should return 5 if we give v', function() {
    expect(romanCalculator.checkValueOfChar('v')).toEqual(5);
  });
  it('should return 10 if we give x', function() {
    expect(romanCalculator.checkValueOfChar('x')).toEqual(10);
  });
  it('should return 50 if we give l', function() {
    expect(romanCalculator.checkValueOfChar('l')).toEqual(50);
  });
  it('should return 100 if we give c', function() {
    expect(romanCalculator.checkValueOfChar('c')).toEqual(100);
  });
  it('should return 500 if we give d', function() {
    expect(romanCalculator.checkValueOfChar('d')).toEqual(500);
  });
  it('should return 1000 if we give m', function() {
    expect(romanCalculator.checkValueOfChar('m')).toEqual(1000);
  });
  it('should return 0 if we give z', function() {
    expect(romanCalculator.checkValueOfChar('z')).toEqual(0);
  });
});

// describe('Roman calculator if given string is number', function() {
//   it('should return 1 if we give i', function() {
//     expect(romanCalculator.abc('i')).toEqual(1);
//   });
// });
