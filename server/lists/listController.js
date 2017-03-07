var craigslist = require('node-craigslist');
var client = new craigslist.Client( {
  city: 'austin'
});

var resultArr = [];

module.exports = {

  search: function(req, res, next) {
    client.search(req.body.data)
      .then(function(listings) {
        res.send(listings);
      })
      .catch(function(error) {
        next(error);
      });
  },

  sendRes: function(req, res, next) {
    console.log(resultArr);
    res.send(resultArr);
  }

}
