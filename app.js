// ---- Require dependencies ----- // Edxael  Starship heroku
var express = require('express');
var app = express();
var ejs = require('ejs');
var morgan = require('morgan');

// ------ Middle-ware ------- //
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));



// ------ Routing Pages ------ //
app.get('/', function(req, res) {
  res.render('pages/00-index.ejs');
});

app.get('/ms', function(req, res) {
  res.render('pages/01-ms.ejs');
});

app.get('/pb', function(req, res) {
  res.render('pages/02-pb.ejs');
});

app.get('/qsa', function(req, res) {
  res.render('pages/03-qsa.ejs');
});

app.get('/cwk', function(req, res) {
  res.render('pages/04-cwk.ejs');
});

// ------- Listening Server ------- //
app.listen(3000, function(err) {
  if(err) {
    throw err;
  }
  console.log('Server listening on port 3000');
});
