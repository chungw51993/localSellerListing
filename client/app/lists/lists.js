angular.module('localList.lists', [])

.controller('ListsController', function($scope, $location, Lists) {
  $scope.list = {city: 'Austin'};

  $scope.search = function() {
    Lists.search($scope.list)
      .then(function (resp) {
        $scope.list.data = resp;
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  $scope.setItem = function(item, city) {
    Lists.setItem(item, city)
      .then(function (resp) {
        $location.path('/item');
      })
      .catch(function(err) {
        console.error(err);
      });
  }

})

.filter('byprice', function() {
  return function(input, max) {
    if(max > 0) {
      var output = [];

      angular.forEach(input, function(list) {
        var price = list.price.split('$')[1];
        price = parseInt(price);
        if (price < max) {
          output.push(list);
        }
      });

      return output;
    } else {
      return input;
    }
  }
})