'use strict';

/* Services */
angular.module('facecatServices', ['ngResource']).
	factory('Face', function($resource){
		return $resource('faces/:faceId.json',{},{
			query: {method:'GET', params:{faceId:'faces'}, isArray:true}
		});
	});