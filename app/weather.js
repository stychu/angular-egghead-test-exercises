'use strict';

var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('WeatherCtrl', function ($scope)
{
    $scope.weatherForecast = [{
        city: 'Krakow', temperature: '34°', describe: 'Partly sunny'
    }, {
        city: 'Warsaw', temperature: '30°', describe: 'Dense fog'
    }, {
        city: 'Białystok', temperature: '29°', describe: 'Cloud'
    }];
});
