angular.module('localList', [
  'localList.lists',
  'localList.services',
  'localList.item',
  'LocalStorageModule',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/lists', {
      templateUrl: 'app/lists/lists.html',
      controller: 'ListsController'
    })
    .when('/item', {
      templateUrl: 'app/item/item.html',
      controller: 'ItemController'
    })
    .otherwise({
      redirectTo: '/lists'
    });
})
