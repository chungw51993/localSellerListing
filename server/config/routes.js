var listController = require('../lists/listController.js');
var itemController = require('../item/itemController.js');
var bodyParser = require('body-parser');
var express = require('express');

module.exports = function(app, express) {
  app.use(bodyParser.json());
  app.post('/lists', listController.search);
  app.post('/item', itemController.detail);
  app.get('/', app.use(express.static(__dirname + '/../client')));
};