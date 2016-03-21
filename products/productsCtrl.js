app
  .controller('ProductsCtrl', ($scope, $uibModal, ProductsService, LoginService) => {
    $scope.userName = LoginService.getUserName(); 
    $scope.animationsEnabled = true;
    $scope.products = [];

    ProductsService.getProducts().then((data)=>{
      $scope.products = data;
    });

    $scope.signOut = () => {
      LoginService.signOut();
    };

    $scope.open = (key) => {
      $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'products/modal/modalView.html',
        controller: 'ModalCtrl',
        size: 'sm',
        resolve: {
          productDescription () {
            return $scope.products[key].description;
          }
        }
      });
    };
    
  });