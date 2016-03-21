app.factory('ProductsService', ($http) => {
  var products = {};

  products.getProducts = () => {
    return $http
	    .get('api/products.json')
	    .then((response) => {
        return response.data;
    	});
  	};

  return products;
});