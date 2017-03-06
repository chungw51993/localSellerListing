var craigslist = require('node-craigslist');
var client = new craigslist.Client( {
  city: 'austin'
});

angular.module('localList.services', [])

.factory('Lists', function() {
  var search = function() {
    return client.search(item)
      .then((listings) => {
        return listings;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return {
    search: search
  }
});