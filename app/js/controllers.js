'use strict';

/* Controllers */
function faceListCtrl($scope, $http){
	$http.get('faces/faces.json').success(function(data){
		$scope.faces=data;
	})
	$scope.orderProp='age';
}
faceListCtrl.$inject=['$scope','$http'];