var listController = require('../lists/listController.js');
var itemController = require('../item/itemController.js');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(bodyParser.json());
  app.post('/lists', listController.search);
  app.post('/item', itemController.detail);
};