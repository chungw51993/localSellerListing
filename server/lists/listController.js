var craigslist = require('node-craigslist');

module.exports = {

  search: function(req, res, next) {
    var city = req.body.data.city.replace(/\s+/g, '');
    var item = req.body.data.item;
    var client = new craigslist.Client({
      city: city
    });
    client.search(item)
      .then(function(listings) {
        res.send(listings);
      })
      .catch(function(error) {
        next(error);
      });
  }
}
