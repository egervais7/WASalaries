var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var mongoose = require('mongoose');

app.use(express.static(path.join(__dirname + 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/state_worker',
  require('./controllers/state_worker'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.listen(3000);
