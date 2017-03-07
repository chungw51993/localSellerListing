angular.module('localList.item', [])

.controller('ItemController', function($scope, Lists, localStorageService, $location) {
  $scope.data = {
    data : {
      images:['https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg']
    }
  };

  $scope.render = function() {
    $scope.data = localStorageService.get('data');
  }

  $scope.goToList = function() {
    $location.path('/lists');
  }

  $scope.goToUrl = function() {
    $location.path($scope.data.data.url);
  }

  $scope.render();
})