banksng = angular.module('banksng',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: '/views/list.html',
                controller: 'BankController'
            }).otherwise({
                redirectTo: '/'
            });
    });