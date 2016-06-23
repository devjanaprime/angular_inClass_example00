var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var pg = require('pg');
var connectionString='postgres://localhost:5432/DBNAMEWHENIHAVEONE'; /// - change this when I have db set up - ///


// base url to show path resolved index.html
app.get( '/', function ( req, res ){
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

// test get route
app.get( '/testGet', function( req, res ){
  console.log( 'in testGet');
  res.send( 'sent from testGet');
}); // end test get

// spin up server
app.listen( 1234, 'localhost', function( req, res ){
  console.log( 'server listening on 1234, if that is possible...' );
}); // end base url

// test post
app.post( '/testPost', urlencodedParser, function( req, res ){
  console.log( 'in testPost: ' + req.body );
  res.send( 'sent from testPost' );
});

// set static folder to 'public'
app.use( express.static( 'public') );
