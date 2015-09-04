'use strict';

describe('directives', function ()
{
    var circle;
    var $scope;

    beforeEach(module('myApp'));
    beforeEach(inject(function ($compile, $rootScope)
    {
        $scope = $rootScope;
        circle = angular.element('<div enter leave class="circle center-block"></div>');
        circle = $compile(circle)($rootScope);
    }));

    describe('circle', function ()
    {
        it('should add bg-danger a class when mouseenter', function ()
        {
            circle.triggerHandler('mouseenter');
            expect($scope.entered).toBe(true);
            expect(circle.hasClass('bg-danger')).toBe(true);
        });

        it('should respond to a mouseenter event', function ()
        {
            circle.triggerHandler('mouseenter');
            expect($scope.entered).toBe(true);
        });

        it('should remove bg-danger class when mouseleave', function ()
        {
            circle.triggerHandler('mouseleave');
            expect(circle.isolateScope().left).toBe(true);
            expect(circle.hasClass('bg-danger')).toBe(false);
        });

        it('should respond to a mouseleave event', function ()
        {
            circle.triggerHandler('mouseleave');
            expect(circle.isolateScope().left).toBe(true);
        });
    });
});
