export function routerConfig ($routeProvider, $locationProvider) {
  'ngInject';
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });

  $routeProvider
    .when('/', {
      templateUrl: 'app/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .when('/catalog', {
      templateUrl: 'app/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .when('/records', {
      templateUrl: 'app/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .when('/news', {
      templateUrl: 'app/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .when('/contacts', {
      templateUrl: 'app/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .when('/about', {
      templateUrl: 'app/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .when('/buy/:id/:token', {
      templateUrl: 'app/views/buy/buy.html',
      controller: 'BuyController',
      controllerAs: 'buyvm'
    })

    .otherwise({
      redirectTo: '/'
    });


}
