/* ExpressJS CRUD Handler */
(function() {
 
  'use strict';
  var express = require('express');
  var router = express.Router();
  var mongojs = require('mongojs');
  var db = mongojs('mydb', ['banks']);
 
  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
  });
 
 /* Return all Banks */
  router.get('/api/banks', function(req, res) {
    db.banks.find({}, {BankId: 0}, function(err, data) {
      if(err) console.log(err);
      else res.json(data);
    });
  });
 
  /* Return banks by City */
  router.get('/api/city/:cityId', function(req, res) {
      var cityId = req.params.cityId;
    
    db.banks.find({City: cityId},{BankId: 0},function(err, data) {
      if(err) console.log(err);
      else  res.json(data);
    });
 
  });
  
   /* Return banks by State */
  router.get('/api/state/:stateId', function(req, res) {
      var stateId = req.params.stateId;
    
    db.banks.find({State: stateId},{BankId: 0},function(err, data) {
      if(err) console.log(err);
      else  res.json(data);
    });
 
  });

 
  module.exports = router;
 
}());