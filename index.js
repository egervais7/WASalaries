var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var https = require('https');
var fs = require('fs');
var privateKey  = fs.readFileSync('key.pem', 'utf8');
var certificate = fs.readFileSync('cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var app = express();

var mongoose = require('mongoose');
// var Worker = require('./models/AnnualSalary');
mongoose.connect('mongodb://localhost/state_workers');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/state_workers',
  require('./controllers/state_workers'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(process.env.PORT || 3000);
httpsServer.listen(process.env.SSLPORT || 4000);
