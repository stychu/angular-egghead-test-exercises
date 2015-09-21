'use strict';
describe('controllers', function ()
{
    var ShopCtrl;
    beforeEach(module('shopApp'));
    beforeEach(inject(function ($controller) {
        ShopCtrl = $controller('ShopCtrl');
    }));

    describe('ShopCtrl', function ()
    {
        it('should return sweets table', function ()
        {
            // use controller function to test this case
            expect(ShopCtrl.addSweets('czekolada')).toEqual(ShopCtrl.sweets);
        });

        it('should return cart table', function ()
        {
            // use controller function to test this case
            expect(ShopCtrl.buyProduct('KAMIKADZE')).toEqual(ShopCtrl.cart);
        });

        it('should return false when there is no argument', function ()
        {
            // use controller function to test this case
            expect(ShopCtrl.buyProduct()).toBe(false);
        });
    });

});
