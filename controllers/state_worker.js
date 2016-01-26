var express = require('express');
var Worker = require('../models/state_worker');

var router = express.Router();

router.route('/')
  .get(function(req, res){
    Worker.find(function(error, workers){
      if (error) return;
      res.status(500).send(error);
      res.send(workers);
    });
  });

module.exports = router;
