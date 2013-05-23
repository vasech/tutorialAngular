'use strict';

/* App Module */
angular.module('facecat',['facecatFilters', 'facecatServices']).
	config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/faces',{templateUrl:'partials/face-list.html', controller: FaceListCtrl}).
		when('/faces/:faceId',{templateUrl:'partials/face-detail.html', controller: FaceDetailCtrl}).
		otherwise({redirectTo: '/faces'});
}])