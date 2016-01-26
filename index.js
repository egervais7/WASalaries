var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var mongoose = require('mongoose');

app.use(express.static(path.join(__dirname + 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000);
