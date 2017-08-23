const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from database
router.get('/ninjas', function(req, res, next) {
  res.send({type: 'GET'});
});
// add a new ninja to the db
router.post('/ninjas', function(req, res, next) {
  Ninja.create(req.body).then(function(ninja) {
    res.send(ninja);
  });
});
// update a ninja in database
router.put('/ninjas/:id', function(req, res, next) {
  res.send({type: 'PUT'});
});
// delete ninja from database
router.delete('/ninjas', function(req, res, next) {
  res.send({type: 'DELETE'});
});

module.exports = router;