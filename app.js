// ---- Require dependencies ----- // Edxael  Starship heroku
var express = require('express');
var app = express();
var ejs = require('ejs');
var morgan = require('morgan');

// ------ Middle-ware ------- //
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'))



// ------ Routing Pages ------ //
app.get('/', function(req, res) {
  res.render('pages/00-index.ejs');
});

app.get('/ah', function(req, res) {
  res.render('pages/01-ayu.ejs');
});

app.get('/mc', function(req, res) {
  res.render('pages/02-madc.ejs');
});

app.get('/bp', function(req, res) {
  res.render('pages/03-bpink.ejs');
});

app.get('/ty', function(req, res) {
  res.render('pages/04-taeyang.ejs');
});

// ------- Listening Server ------- //
app.listen(3000, function(err) {
  if(err) {
    throw err;
  }
  console.log('Here is the port listening on 3000');
});
