'use strict';

/* Controllers */
function FaceListCtrl($scope, $http){
	$http.get('faces/faces.json').success(function(data){
		$scope.faces=data;
	})
	$scope.orderProp='age';
}
//FaceListCtrl.$inject=['$scope', '$http'];
function FaceDetailCtrl($scope, $routeParams, $http){
	$http.get('faces/'+ $routeParams.faceId +'.json').success(function(data){
		$scope.face = data;
	});
}

//FaceDetailCtrl.$inject=['$scope','$routeParams', '$http'];