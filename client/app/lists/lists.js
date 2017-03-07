angular.module('localList.lists', [])

.controller('ListsController', function($scope, Lists) {
  $scope.list = {};

  $scope.search = function() {
    Lists.search($scope.list.item)
      .then(function (resp) {
        $scope.list = resp;
      })
      .catch(function(err) {
        console.error(err);
      });
  }

})

.filter('byprice', function() {
  return function(input) {
    console.log(input);
    var output = [];

    angular.forEach(input, function(list) {
      var price = list.price.split('$')[1];
      if (price < input) {
        output.push(list);
      }
    });

    return output;
  }
})