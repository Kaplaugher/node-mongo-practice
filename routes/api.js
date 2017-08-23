const express = require('express');
const router = express.Router();

// get a list of ninjas from database
router.get('/ninjas', function(req, res, next) {
  console.log(req.body);
  res.send({type: 'GET'});
});
// add a new ninja to the db
router.post('/ninjas', function(req, res, next) {
  res.send({type: 'POST'});
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