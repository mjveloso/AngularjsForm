(function() {

	angular.module('ExampleService', [])
		.factory('ExampleService', ['$http',
		 function($http) {

		 	return {
		 		example : example
		 	}

		 	function example() {
		 		return $http({
		 			method: 'GET',
		 			url: 'php/api/customerApi.php',
		 			dataType: 'json',
		 			contentType: 'applications/json'
		 		});
		 	}

		 }]);

}) ();