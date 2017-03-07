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