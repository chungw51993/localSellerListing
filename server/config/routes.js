var listController = require('../lists/listController.js');

module.exports = function(app, express) {
  app.get('/lists', listController.search);
};