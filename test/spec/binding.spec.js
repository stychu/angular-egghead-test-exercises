'use strict';
describe('binding', function ()
{
    var text;
    var operation;
    var $scope;

    beforeEach(inject(function ($compile, $rootScope)
    {
        $scope = $rootScope;
        text = angular.element('<div>{{"Ala" +  " has " + 3 + " cats"}}</div>');
        operation = angular.element('<div>{{111 * 111}}</div>');
        text = $compile(text)($rootScope);
        operation = $compile(operation)($rootScope);
    }));
    
    it ('Should return \'Ala has 3 cats\'', function () {
        $scope.$digest();
        expect(text.html()).toBe('Ala has 3 cats');
    });

    it ('Should return 12321', function () {
        $scope.$digest();
        expect(operation.html()).toBe('12321');
    })

});
