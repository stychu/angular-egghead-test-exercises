describe("directives", function ()
{
    var circle;
    var square;
    var $scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($compile, $rootScope)
    {
        $scope = $rootScope;
        square = angular.element('<div click-on="bg-info" class="square center-block"></div>');
        circle = angular.element('<div enter class="circle center-block"></div>');
        circle = $compile(circle)($rootScope);
        square = $compile(square)($rootScope);
    }));

    <!-- click-on directive test-->
    describe('clickOn', function () {
        it('Should add a class of bg-info', function () {
            expect(square.hasClass('bg-info')).toBe(true);
        })
    });
    describe('enter', function () {
        it('Should add a class of bg-danger', function () {
            expect(circle.hasClass('bg-danger')).toBe(true);
        })
    });


});