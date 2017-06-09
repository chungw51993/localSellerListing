var craigslist = require('node-craigslist');
var express = require('express');
var router = express.Router();

router.get('/:city', (req, res, next) => {
  var client = new craigslist.Client({
    city: req.params.city
  })

  client.list()
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.error(err);
      next();
    })
})

router.get('/:city/:item', (req, res, next) => {
  var client = new craigslist.Client({
    city: req.params.city
  });
  client.search(req.params.item)
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.error(err);
      next();
    });
})


module.exports = router;