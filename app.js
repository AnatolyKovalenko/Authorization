var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

app.run(($rootScope, $state) => {
  $rootScope.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams) => {
    if (toState.data && !localStorage.isUser) {
      event.preventDefault();
      $state.go('login');
    }    
  });
});

