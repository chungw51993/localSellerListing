angular.module('localList.services', [])

.factory('Lists', function($http, localStorageService) {
  return {
    search: function(item) {
      return $http({
        method: 'GET',
        url: '/api/list/' + item.city + '/' + item.item
      })
      .then(function(resp) {
        return resp.data;
      });
    },

    setItem: function(item, city) {
      return $http({
        method: 'POST',
        url: '/api/item/',
        data: {
          item: item,
          city: city
        }
      })
      .then(function(resp) {
        return localStorageService.set('data', resp);
      });
    },

    getList: function(city) {
      return $http({
        method: 'GET',
        url: '/api/list/' + city
      })
      .then(function(resp) {
        return resp.data
      })
    }
  }
});