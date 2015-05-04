'use strict';

angular.module('controllers').controller('ProductCtrl', ['$scope', function ($scope)
{
    $scope.cart = [];

    $scope.productList = [{
        name: 'Juice', price: 4, count: 5, image: 'assets/5.png'
    }, {
        name: 'Yogurt', price: 2, count: 3, image: 'assets/1.png'
    }, {
        name: 'Butter', price: 3, count: 3, image: 'assets/4.png'
    }, {
        name: 'Chocolate', price: 5, count: 1, image: 'assets/3.png'
    }];
    $scope.totalPrice = 0;

    $scope.addPrice = function (price)
    {
        $scope.totalPrice += price;
    };

    $scope.subtractPrice = function (price)
    {
        $scope.totalPrice -= price;
    };

    $scope.updateProductList = function (product, add)
    {
        var indexList = $scope.productList.indexOf(product);
        if (add) {
            $scope.productList[indexList].count--;
        } else {
            $scope.productList[indexList].count++;

        }
    };
}]);
