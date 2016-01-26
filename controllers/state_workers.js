var express = require('express');
var Worker = require('../models/state_workers');

var router = express.Router();

router.route('/')
  .get(function(req, res){
    Worker.find(function(error, workers){
      if (error) return res.status(500).send(error);
      res.json(workers);
    });
  });

module.exports = router;
