console.log( 'script.js sourced' );

// create an ng app for our page
var myApp=angular.module( 'myApp', [] );

// create a controller
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

    ////////////// TEST GET /////////////////
    // REQUIRES $http dependency injection //
    $http({
      method: 'GET',
      url: '/testGet'
    }).then( function( response ){
      console.log( response.data );
    }), function myError( response ){
      console.log( response.statusText );
    };
    console.log( 'back from testGet call' );


    ///////////////// TEST POST //////////////////
    // also REQUIRES $http dependency injection //
    $http({
      method: 'POST',
      url: '/testPost',
      data: objectToSend
    }).then( function( response ){
      console.log( response.data );
    }), function myError( response ){
      console.log( response.statusText );
    };
    console.log( 'back from testPost call' );
  }; // end check input function
}]);
