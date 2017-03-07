angular.module('localList', [
  'localList.lists',
  'localList.services',
  'ngRoute'
])
.config(function ($routeProvider) {
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
