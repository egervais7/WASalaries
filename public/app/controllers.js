angular.module('SalaryCtrls', ['SalaryServices'])
.controller('HomeCtrl', ['$scope', 'Salary', function($scope, Salary) {

$scope.salaries = [];
// $scope.search = '';
console.log("outside query");
Salary.query(function success(data){
  console.log("querying");
  console.log(data);
  $scope.salaries = data;
}, function error(data){
  console.log(data);
});

}])
.controller('SalaryCtrl', ['$scope', '$routeParams', 'Salary', function($scope, $routeParams, Salary){

}]);
