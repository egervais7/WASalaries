var app = angular.module('SalaryApp', ['ngRoute', 'SalaryCtrls', 'SalaryServices']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'app/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/salary', {
    templateUrl: 'app/views/salary.html',
    controller: 'SalaryCtrl'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);
