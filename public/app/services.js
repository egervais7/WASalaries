angular.module('SalaryServices', ['ngResource'])
.factory('Salary', ['$resource', function($resource){
  return $resource('https://wa-salaries-api.herokuapp.com/api/state_workers/:id');
}]);
