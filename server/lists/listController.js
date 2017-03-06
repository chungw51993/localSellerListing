var craigslist = require('node-craigslist');
var client = new craigslist.Client( {
  city: 'austin'
});


module.exports = {

  search: function(req, res, next) {
    client.search('xbox')
      .then(function(listings) {
        res.send(listings);
      })
      .catch(function(error) {
        next(error);
      });
  }

}
