angular.module('SalaryCtrls', ['SalaryServices'])
.controller('HomeCtrl', ['$scope', 'Salary', function($scope, Salary) {

$scope.salaries = [];
$scope.searchTerm = '';

Salary.query(function success(data){
  console.log("inside the query");
  console.log($scope.searchTerm);
  console.log(data.length);
  $scope.salaries = data;
}, function error(data){
  console.log(data);
});

$scope.search = function(){

};


}])
.controller('SalaryCtrl', ['$scope', '$routeParams', 'Salary', function($scope, $routeParams, Salary){

}]);
