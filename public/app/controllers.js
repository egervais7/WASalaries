angular.module('SalaryCtrls', ['SalaryServices'])
.controller('HomeCtrl', ['$scope', 'Salary', function($scope, Salary) {

$scope.salaries = [];
$scope.searchTerm = '';

Salary.query(function success(data){
  console.log("inside the query");
  console.log($scope.searchTerm);
  console.log(data);
  $scope.salaries = data;
  $scope.sum = 0;

  for (var i = 0; i < $scope.salaries.length; i++) {
    var salary = parseInt($scope.salaries[i].Sal2014);
    $scope.sum += salary;
  }

}, function error(data){
  console.log(data);
});

$scope.search = function(){

};

}])
.controller('SalaryCtrl', ['$scope', '$routeParams', 'Salary', function($scope, $routeParams, Salary){

}]);
