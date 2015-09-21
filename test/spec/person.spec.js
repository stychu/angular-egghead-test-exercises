'use strict';

describe('directives', function ()
{
    var $scope;
    var change;
    var $compile;
    var $rootScope;

    beforeEach(module('myApp'));
    beforeEach(inject(function (_$compile_, _$rootScope_)
    {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_;
        $scope.person = {firstName: 'John', lastName: 'watson', age: 21, email: 'john.watson@email.com'};
        change = angular.element('<div change="person"></div>');
        $compile(change)($rootScope);
    }));

    describe('change', function ()
    {
        it('should update firstName on double click', function ()
        {
            change.triggerHandler('dbclick');
            expect(change.isolateScope().change.firstName).toBe("John");
            expect($scope.person.firstName).toBe("John");

        });

        it('should update lastName on double click', function ()
        {
            change.triggerHandler('dbclick');
            expect(change.isolateScope().change.lastName).toBe("watson");
            expect($scope.person.lastName).toBe("watson");

        });

        it('should update age on double click', function ()
        {
            change.triggerHandler('dbclick');
            expect(change.isolateScope().change.age).toBe(21);
            expect($scope.person.age).toBe(21);

        });

        it('should update person object on double click', function ()
        {
            change.triggerHandler('dbclick');
            //expect(change.isolateScope().change.lastName).toBe("watson");
            expect($scope.person.firstName).toEqual("John");
            expect($scope.person.lastName).toEqual("watson");
            expect($scope.person.age).toEqual(21);
            expect($scope.person.email).toEqual("john.watson@email.com");

        });
    });
});
