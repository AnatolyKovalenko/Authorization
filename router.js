app.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/login');
  
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login/loginView.html',
      controller: 'LoginCtrl'
    })
    .state('products', {
      url: '/products',
        templateUrl: 'products/productsView.html',
        controller: 'ProductsCtrl',
        data: {
          protected: true
        } 
    });  
});