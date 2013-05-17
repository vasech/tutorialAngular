'use strict';

/* jasmine specs for controllers go here */

describe('PhoneCat controllers', function() {
	describe('faceListCtrl', function(){
		var scope, ctrl;

		beforeEach(function(){
			scope={},
			ctrl=new faceListCtrl(scope);
		});

		it('should create "faces" model with 2 faces', function(){
			expect(scope.faces.length).toBe(3);
		});

		it('should set the default value of orderProp model', function(){
			expect(scope.orderProp).toBe('age');
		});
	});
});