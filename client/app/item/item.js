angular.module('localList.item', [])

.controller('ItemController', function($scope, Lists, localStorageService, $location, $sce) {
  $scope.item = {};

  $scope.render = function() {
    $scope.item = localStorageService.get('data');
    $scope.posted = $scope.item.data.postedAt.split('T').join(' ').split('.')[0];
    var location = $scope.item.data.mapUrl.split('@')[1].split(',').splice(0, 2).join(', ');
    $scope.location = $sce.trustAsResourceUrl('//www.google.com/maps/embed/v1/place?q=' + location + '&zoom=17&key=AIzaSyCiyY-io3zhG_HUPAjVOi1OED2tt3g-POQ');
  };

  $scope.goToList = function() {
    $location.path('/lists');
  };

  $scope.render();
});