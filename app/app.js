(function() {

	angular.module('app', [
		'ExampleController'
	])

	.directive( 'resetDirective', [ '$parse', function ( $parse ) {
	    return function( scope, element, attr ) {
	        var fn = $parse( attr.resetDirective );
	        var masterModel = angular.copy( fn( scope ) );
	        // Error check to see if expression returned a model
	        if ( !fn.assign ) {
	            throw Error( 'Expression is required to be a model: ' + attr.resetDirective );
	        }

	        // function that resetforms
	        function resetForm() {
	        	 scope.$apply( function () {
	                fn.assign( scope, angular.copy( masterModel ) );
	                scope.form.$setPristine();
	            });
	        }

	        //bind to trigger the reset
	        $('#openModalBtn').on( 'click', function ( event ) {
	           resetForm();
	        });
	    };
	}]);

}) ();