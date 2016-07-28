var express = require('express');
var app=express();
var path = require('path');

// base url to show path resolved index.html
app.get( '/', function ( req, res ){
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

// spin up server
app.listen( 1234, 'localhost', function( req, res ){
  console.log( 'server listening on 1234, if that is possible...' );
}); // end base url

// set static folder to 'public'
app.use( express.static( 'public') );
