'use strict';

/* Controllers */
function FaceListCtrl($scope, $http){
	$http.get('faces/faces.json').success(function(data){
		$scope.faces=data;
	})
	$scope.orderProp='age';
}
function FaceDetailCtrl($scope, $routeParams){
	$scope.faceId=$routeParams.faceId;
}
//faceListCtrl.$inject=['$scope','$http'];