angular.module('SalaryServices', ['ngResource'])
.factory('Salary', ['$resource', function($resource){
  return $resource('http://localhost:3000/api/state_workers/:id');
}]);
