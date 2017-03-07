var craigslist = require('node-craigslist');
var client = new craigslist.Client( {
  city: 'austin'
});


module.exports = {

  search: function(req, res, next) {
    var resultArr = [];
    client.search(req.body.data)
      .then(function(listings) {
        res.send(listings);
      })
      .catch(function(error) {
        next(error);
      });


  }

}
