let amazonextension = angular.module("amazonextension", ['ui.router']);

amazonextension.config(['$stateProvider', function($stateProvider)
{
    $stateProvider
    .state('Home',
    {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'home'
    })
    .state('Login',
    {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'login'
    });
}]);

