(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', DIController);

DIController.$inject = ['$scope'];
function DIController($scope) {
  $scope.name = "Someone";

  $scope.setemojiname = "smile";

  $scope.rotateEmoji = function(){
    $scope.setemojiname = "upsidesmile";
  };

  $scope.sayMessage = function (){
    return "What No What";
  };
}

/*function DIController($scope, $filter, $injector) {
  $scope.name = "";
 

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(DIController));
 /* $scope.total = 0;

  $scope.displayTotal = function(){

  	var totalStringNumber = calculatorStringNumber($scope.name);

  	$scope.total = totalStringNumber;
  };

  function calculatorStringNumber(input){

  	var sumOfString = 0;

  	for(var i =  0; i < input.length; i++){
  		sumOfString += input.charCodeAt(i);
  	}

  	return sumOfString;

  }*/
 


})();
