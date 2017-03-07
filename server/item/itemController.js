var craigslist = require('node-craigslist');

module.exports = {

  detail: function(req, res, next) {
    var city = req.body.location.replace(/\s+/g, '');
    var item = req.body;
    var client = new craigslist.Client({
      city: city
    });
    client.details(item)
      .then(function(list) {
        res.send(list);
      })
      .catch(function(error) {
        next(error);
      });
  }
}