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
jest.dontMock('../fizzbuzz.js');


var fizzBuzz = require('../fizzbuzz.js');

describe('fizz function', function() {
  it('should return "fizz" if number can be divided by 3', function() {
    expect(fizzBuzz.fizz(3)).toEqual('fizz');
    expect(fizzBuzz.fizz(9)).toEqual('fizz');
  });
  it('should return an empty string if number cannot be divided by 3', function() {
    expect(fizzBuzz.fizz(10)).toEqual('');
    expect(fizzBuzz.fizz(250)).toEqual('');
  });
});

describe('buzz function', function() {
  it('should return "buzz" if number can be divded by 5', function() {
    expect(fizzBuzz.buzz(5)).toEqual('buzz');
    expect(fizzBuzz.buzz(2138612632130)).toEqual('buzz');
  });
  it('should return an empty string if number cannot be divided by 5', function() {
    expect(fizzBuzz.buzz(5431)).toEqual('');
    expect(fizzBuzz.buzz(123612637123712)).toEqual('');
  });
});

describe('fizzbuzz function', function() {
  it('should return "fizzbuzz" if number can be divded by 3 and 5', function() {
    expect(fizzBuzz.fizzBuzz(15)).toEqual('fizzbuzz');
  });
  it('should return an empty string if number cannot be divided either by 3 or 5', function() {
    expect(fizzBuzz.fizzBuzz(8)).toEqual('');
    expect(fizzBuzz.fizzBuzz(244)).toEqual('');
  });
});
