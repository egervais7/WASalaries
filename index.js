var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var mongoose = require('mongoose');
// var Worker = require('./models/AnnualSalary');
mongoose.connect('mongodb://localhost/state_workers');

app.use(express.static(path.join(__dirname + 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/state_workers',
  require('./controllers/state_workers'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000);
