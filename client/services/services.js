angular.module('localList.services', [])

.factory('Lists', function($http) {

  var search = function(item) {
    var json = { data: item };
    return $http.post('/lists', json)
    .then(function(resp) {
      return resp.data;
    });
  }

  return {
    search: search
  }
});