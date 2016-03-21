app
	.controller('ModalCtrl', ($scope, $uibModalInstance, productDescription) => {
	  $scope.productDescription = productDescription;

	  $scope.ok = () => {
	    $uibModalInstance.close();
	  };
	  
	  $scope.cancel = () => {
	    $uibModalInstance.dismiss('cancel');
	  };
	});