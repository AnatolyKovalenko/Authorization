app.factory('LoginService', ($http, $state) => {
  var users = {};

  users.getUserCredentials = () => {
    return $http.get('api/users.json').then((response) => {
        return response.data;
    });
  };

  users.getUserName = () => {
    return localStorage.getItem('isUser');
  };

  users.signIn = (userLogin) => {
    localStorage.setItem('isUser', userLogin);
    $state.go('products');
  };

  users.signOut = () => {
    localStorage.removeItem('isUser');
    $state.go('login');
  };

  return users;
});