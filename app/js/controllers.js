'use strict';

/* Controllers */
function faceListCtrl($scope){
	$scope.faces=[
		{"name":"Che Guevara",
		"age":39},
		{"name":"Michail Sergejewitsch Gorbatschow",
		"age":82},
		{"name":"Wladimir Iljitsch Lenin",
		"age":46}
	];
	$scope.test= "testing here around";
	$scope.orderProp='age';
}