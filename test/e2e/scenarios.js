'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Faces App', function() {
	describe('Faces list view', function() {
		beforeEach(function(){
			browser().navigateTo('../../app/index.html');
		});
		it('Should filter the face list as user types into the search box',function(){
			expect(repeater('.faces li').count()).toBe(3);

			input('ddd').enter('che');
			expect(repeater('.faces li').count()).toBe(1);
		});
		it('should be possible to control faces over the drop down select box',function(){
			input('ddd').enter('');

			expect(repeater('.faces li','Face List').column('face.name')).toEqual(["Che Guevara","Wladimir Iljitsch Lenin","Michail Sergejewitsch Gorbatschow"]);

			select('orderProp').option('Alphabetical');

			expect(repeater('.faces li','Face List').column('face.name')).toEqual(["Che Guevara","Michail Sergejewitsch Gorbatschow","Wladimir Iljitsch Lenin"]);
		});
		it('should display the current filter value within an element with id "status"',
			function(){
				expect(element('#status').text()).toMatch(/Current filter: \s*$/);

				input('ddd').enter('che');

				expect(element('#status').text()).toMatch(/Current filter: che\s*$/);
				//using('#status').expect(binding('ddd')).toBe('che');
			});
	});
});