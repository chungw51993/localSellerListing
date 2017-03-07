var listController = require('../lists/listController.js');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(bodyParser.json());
  app.post('/lists', listController.search);
};