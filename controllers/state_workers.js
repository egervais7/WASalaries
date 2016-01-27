var express = require('express');
var Worker = require('../models/state_workers');

var router = express.Router();

router.route('/')
  .get(function(req, res){
    Worker.find(function(error, workers){
      if (error) return res.status(500).send(error);
      res.json(workers);
    }).limit(5000);
  });

router.route('/:id')
  .get(function(req, res) {
    Worker.find( { job_title: req.params.id }, function(error, worker) {
      if (error) return res.status(500).send(error);
      res.json(worker);
    });
  });

module.exports = router;
