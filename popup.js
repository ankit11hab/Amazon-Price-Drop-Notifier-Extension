let amazonextension = angular.module("amazonextension", ['ui.router']);

amazonextension.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
{
    $stateProvider
    .state('home',
    {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'home'
    })
    .state('login',
    {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'login'
    })
    .state('root',
    {
        url: '/',
        templateUrl: 'home.html',
        controller: 'home'
    });
    $urlRouterProvider.otherwise('home');
}]);

