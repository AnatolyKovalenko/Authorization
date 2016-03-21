app.controller('LoginCtrl', ($http, $scope, $state, $location, LoginService) => {
  
  $scope.loginSubmit = () => {
    LoginService.getUserCredentials().then((users)=>{
      
      var data = {
        login: $scope.username,
        password: $scope.password
      };

      users.forEach((user)=>{
        var userCredential = (data.login === user.login && data.password === user.password); 
        if(userCredential) LoginService.signIn(user.login);
      });

    });
  };

});
