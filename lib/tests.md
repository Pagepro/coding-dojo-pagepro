# CHEAT SHEET

## Jest
* jest.autoMockOff()
* jest.autoMockOn()
* jest.clearAllTimers()
* jest.dontMock(moduleName)
* jest.genMockFromModule(moduleName)
* jest.genMockFunction()
* jest.genMockFn()
* jest.mock(moduleName)
* jest.runAllTicks()
* jest.runAllTimers()
* jest.runOnlyPendingTimers()
* jest.setMock(moduleName, moduleExports)

## Globally injected variables
* afterEach(fn)
* beforeEach(fn)
* describe(name, fn)
* it(name, fn)
* it.only(name, fn) executes only this test. Useful when investigating a failure
* jest
* pit(name, fn) helper for promises
* require(module)
* require.requireActual(module)
* xdescribe(name, fn)
* xit(name, fn)

## expect(value)
* .not inverse the next comparison
* .toThrow(?message)
* .toBe(value) comparison using ===
* .toEqual(value) deep comparison. Use jasmine.any(type) to be softer
* .toBeFalsy()
* .toBeTruthy()
* .toBeNull()
* .toBeUndefined()
* .toBeDefined()
* .toMatch(regexp)
* .toContain(string)
* .toBeCloseTo(number, delta)
* .toBeGreaterThan(number)
* .toBeLessThan(number)
* .toBeCalled()
* .toBeCalledWith(arg, um, ents)
* .lastCalledWith(arg, um, ents)
