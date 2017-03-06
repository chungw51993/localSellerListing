angular.module('localList', [
  'localList.services'
  'localList.list'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/lists', {
      templateUrl: 'app/lists/lists.html',
      controller: 'ListsController'
    })
    .otherwise({
      redirectTo: '/lists'
    });
})
.run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeStart', function() {
    $location.path('/lists');
  })
});