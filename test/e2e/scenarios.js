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
		it('should display the current filter value within an element with id "status"',
			function(){
				expect(element('#status').text()).toMatch(/Current filter: \s*$/);

				input('ddd').enter('che');

				expect(element('#status').text()).toMatch(/Current filter: che\s*$/);
				//using('#status').expect(binding('ddd')).toBe('che');
			})
	});
});