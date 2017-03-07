angular.module('localList.services', [])

.factory('Lists', function($http, localStorageService) {

  var search = function(item) {
    var json = { data: item };
    return $http.post('/lists', json)
    .then(function(resp) {
      return resp.data;
    });
  };

  var setItem = function(item, city) {
    item.location = city;
    return $http.post('/item', item)
    .then(function(resp) {
      return localStorageService.set('data', resp);
    });
  }

  return {
    setItem: setItem,
    search: search
  }
});