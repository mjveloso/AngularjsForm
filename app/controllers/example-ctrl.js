(function() {

	angular.module('ExampleController', ['ExampleService'])
		.controller('ExampleController', ['$scope', 'ExampleService',
			function($scope,ExampleService) {

				"use strict";

				$scope.master = {};
				$scope.customerData = {};
    			$scope.myModelCopy = angular.copy( $scope.master );

				$scope.openModal = function() {
					$('#customerModal').modal('show');
				}

		}]);

}) ();