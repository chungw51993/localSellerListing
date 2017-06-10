angular.module('localList', [
  'localList.lists',
  'localList.services',
  'localList.item',
  'LocalStorageModule',
  'ngRoute'
])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/lists', {
      templateUrl: 'app/lists/lists.html',
      controller: 'ListsController'
    })
    .when('/lists/:id', {
      templateUrl: 'app/item/item.html',
      controller: 'ItemController'
    })
    .otherwise({
      redirectTo: '/lists'
    });

})
