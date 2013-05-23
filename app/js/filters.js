'use strict';

/* Filters */
angular.module('facecatFilters',[]).filter('ddda',function(){
	return function(input){
		return input ? '\u2713' : '\u2718';
	};
});