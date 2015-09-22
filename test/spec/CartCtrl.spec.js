describe("CartCtrl", function ()
{
    var $scope, controller, juiceProduct, butterProduct, chocolateProduct;

    beforeEach(function ()
    {
        module('controllers');
        inject(function (_$rootScope_, $controller)
        {
            $scope = _$rootScope_.$new();
            chocolateProduct = {name: 'Chocolate', price: 5, count: 1, image: 'assets/3.png'};
            $scope.cart = [chocolateProduct];

            $scope.addPrice = jasmine.createSpy();
            $scope.updateProductList = jasmine.createSpy();
            $scope.subtractPrice = jasmine.createSpy();

            controller = $controller('CartCtrl', {$scope: $scope});
        });
        juiceProduct = {name: 'Juice', price: 4, count: 5, image: 'assets/5.png'};
        butterProduct = {name: 'Butter', price: 3, count: 3, image: 'assets/4.png'};

    });

    <!--complete test cases-->
    it("should add to $scope.cart juice", function ()
    {
        $scope.addToCart(juiceProduct);
        expect($scope.cart).toEqual([chocolateProduct,juiceProduct]);
    });

    it("should remove from $scope.cart chocolate", function ()
    {
        $scope.removeFromCart(chocolateProduct);
        expect($scope.cart).toEqual([]);
    });

    it("should call updateProductList with product object when add is true", function ()
    {
        $scope.addToCart(juiceProduct);
        expect($scope.updateProductList).toHaveBeenCalledWith(juiceProduct, true);
    });

    it("should call updateProductList with product object when add is false", function ()
    {
        $scope.removeFromCart(chocolateProduct);
        expect($scope.updateProductList).toHaveBeenCalledWith(chocolateProduct, false);
    });
});