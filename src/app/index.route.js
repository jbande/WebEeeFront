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
    .when('/catalog.html', {
      templateUrl: 'app/views/catalog/catalog.html',
      controller: 'CtgController',
      controllerAs: 'ctgvm'
    })
    .when('/news.html', {
      templateUrl: 'app/views/news/news.html',
      controller: 'NewsController',
      controllerAs: 'newsvm'
    })
    .when('/contacts.html', {
      templateUrl: 'app/views/contacts/contacts.html',
      controller: 'ContactsController',
      controllerAs: 'ctcsvm'
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
