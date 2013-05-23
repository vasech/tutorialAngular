'use strict';

/* Controllers */
function FaceListCtrl($scope, Face){
	$scope.faces = Face.query();
	$scope.orderProp='age';
}
//FaceListCtrl.$inject=['$scope', 'Face'];
function FaceDetailCtrl($scope, $routeParams, Face){
	$scope.face = Face.get({faceId: $routeParams.faceId}, function(face){
		$scope.mainImageUrl = face.images[0];
	});
	
	$scope.setImage = function(imageUrl){
		$scope.mainImageUrl = imageUrl;
	}
	$scope.hello = function(name) {
      alert('Hello ' + (name || 'world') + '!');
  }
}

//FaceDetailCtrl.$inject=['$scope','$routeParams', 'Face'];