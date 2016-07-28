console.log( 'script.js sourced' );

// create an ng app for our page
// don't forget to set ng-app in HTML!!!
var myApp=angular.module( 'myApp', [] );

// create a controller
// remember, only HTML elements within the controller's scope can use whatever is within the controller
myApp.controller( 'pinkyController', [ '$scope', '$http', function( $scope, $http ){
  // create an array to hold all objects
  $scope.allTheDucks=[];
  $scope.checkInput = function(){
    // get input from user and putting in an object
    var objectToSend={
      "inputer1": $scope.brainiacBinder,
      "inputer2": $scope.brainiacBinder2
    };
    // pushing the object to an array
    $scope.allTheDucks.push( objectToSend );
    // note: $scope.allTheDucks is refered to as "allTheDucks" in HTML
  }; // end check input function
}]);
