describe("weatherApp", function ()
{
    describe("index", function ()
    {
        beforeEach(function () {
            browser.get('/#');
        });

        it("should display the correct title", function ()
        {
            expect(browser.getTitle()).toBe('AngularJS Tutorials');
        });

        it("should display the increase temperature when plus button clicked", function ()
        {
            var button = element(by.id('upButton')),
                message = element(by.binding('currentTemp'));

            button.click();

            expect(message.getText()).toBe('30 °C');
        });

        it("should display the increase temperature when minus button clicked", function ()
        {
            var button = element(by.id('downButton')),
                message = element(by.binding('currentTemp'));

            button.click();

            expect(message.getText()).toBe('28 °C');
        });
    });
});