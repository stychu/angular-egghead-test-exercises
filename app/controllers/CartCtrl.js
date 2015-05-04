'use strict';

angular.module('controllers').controller('CartCtrl', ['$scope', function ($scope)
{
    $scope.addToCart = function (product)
    {
        var index = $scope.cart.indexOf(product);
        if (product.count > 0) {
            $scope.addPrice(product.price);
            $scope.updateProductList(product, true);
            $scope.cart.push(product);
        }
    };

    $scope.removeFromCart = function (product)
    {
        var index = $scope.cart.indexOf(product);
        $scope.subtractPrice(product.price);
        $scope.updateProductList(product, false);
        $scope.cart.splice(index, 1);

    };

}]);
