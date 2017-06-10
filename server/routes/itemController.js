var craigslist = require('node-craigslist');
var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {
  var client = new craigslist.Client({
    city: req.body.city.replace(/\s+/g, '')
  });
  client.details(req.body.item)
    .then(function(list) {
      res.send(list);
    })
    .catch(function(error) {
      console.error(error);
      next();
    });
});

module.exports = router;