'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Faces App', function() {
	describe('Faces list view', function() {
		beforeEach(function(){
			browser().navigateTo('../../app/index.html');
		});
		it('Should filter the face list as user types into the search box',function(){
			expect(repeater('.faces').count()).toBe(3);

			input('ddd').enter('che');
			expect(repeater('.faces').count()).toBe(1);
		});
	});
});