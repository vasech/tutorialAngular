'use strict';

/* jasmine specs for controllers go here */

describe('PhoneCat controllers', function() {
	describe('faceListCtrl', function(){
		it('should create "faces" model with 2 faces', function(){
			var scope = {},
				ctrl = new faceListCtrl(scope);
			expect(scope.faces.length).toBe(2);
		});
	});
});