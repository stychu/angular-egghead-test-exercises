'use strict';
var shopApp = angular.module('shopApp', []);

shopApp.controller('ShopCtrl', function ()
{
    this.sweets = [{name: 'Starburst'}, {name: 'Nerds'}];
    this.cart = [];

    this.addSweets = function (sweet)
    {
        this.sweets.push({name: sweet});
        return this.sweets;
    };

    this.buyProduct = function (product)
    {
        if (product != null) {
            this.cart.push({name: product});
            return this.cart;
        } else {
            return false;
        }
    };
});
