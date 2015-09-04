'use strict'
var myFilter = angular.module('myFilter', []);

myFilter.filter('quote', function ()
{
    return function (text)
    {
        return '"' + text + '"';
    }
});

myFilter.filter('withoutH', function ()
{
    return function (text)
    {
        return text.split('h').join("").split('H').join("");
    }
});

myFilter.filter('firstLetterUpp', function ()
{
    return function (text)
    {
        return text.replace(/([^\W_]+[^\s-]*) */g, function (text)
        {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        });
    }
});


function FilterCtrl($scope)
{
    $scope.data = {
        citation: "To be, or not to be...",
        title: "The Hobbit: The Battle of the Five Armies",
        someText: "Visit BBC News for up-to-the-minute news, breaking news, video, audio and stories."
    }
}
