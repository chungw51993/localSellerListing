angular.module('localList.services', [])

.factory('Lists', function($http) {

  var search = function(item) {
    var json = { data: item };
    return $http.post('/lists', json)
    .then(function(resp) {
      console.log(resp.data);
      return resp.data;
    });
  }

  return {
    search: search
  }
});