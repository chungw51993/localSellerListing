angular.module('localList.lists', [])

.controller('ListsController', function($scope, $location, Lists) {
  $scope.list = {city: 'Austin'};
  $scope.loading = false;

  $scope.search = function() {
    $scope.loading = true;
    Lists.search($scope.list)
      .then(function (resp) {
        $scope.loading = false;
        $scope.list.data = resp;
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  $scope.setItem = function(item, city) {
    console.log(item);
    Lists.setItem(item, city)
      .then(function (resp) {
        $location.path('/lists/' + item.pid);
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  getList = function() {
    $scope.loading = true;
    Lists.getList($scope.list.city)
      .then(function(resp) {
        $scope.loading = false;
        $scope.list.data = resp;
      });
  };

  getList();
})

.filter('byprice', function() {
  return function(input, max) {
    if (max > 0) {
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
  };
});