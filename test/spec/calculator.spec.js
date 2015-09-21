'use strict';

describe('services', function ()
{
    var CalculatorService;
    beforeEach(module('myApp'));
    beforeEach(inject(function (_CalculatorService_) {
        CalculatorService = _CalculatorService_;
    }));
    // add addition describe
    describe('addition', function () {
        it('Should add two variables', function () {
            expect(CalculatorService.addition(2,3)).toBe(5);
        })
    });
    // add subtraction describe
    describe('subtraction', function () {
        it('Should subtract two variables', function () {
            expect(CalculatorService.subtraction(6,3)).toBe(3);
        })
    });
    // add multiplication describe
    describe('multiplication', function () {
        it('Should multiple two variables', function () {
            expect(CalculatorService.multiplication(6,3)).toBe(18);
        })
    });
    // add division describe
    describe('division', function () {
        it('Should divide two variables', function () {
            expect(CalculatorService.division(6,3)).toBe(2);
            expect(CalculatorService.division(6,0)).toBe(false);
            expect(CalculatorService.division(0,6)).toBe(false);
        })
    });
});
