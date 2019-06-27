'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var ejs = require('ejs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '../data')));

app.get('/', function(req, res) {
  res.render('index');
});

var server = app.listen(3030, function() {
  console.log('Express server listening on port ' + server.address().port);
});
