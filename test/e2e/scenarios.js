'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Faces App', function() {
	describe('Faces list view', function() {
		beforeEach(function(){
			browser().navigateTo('../../app/index.html#/faces');
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
		it('should render faces specific links', function(){
			input('ddd').enter('Cheguevara');
			element('.faces li a').click();
			expect(browser().location().url()).toBe('/faces/cheguevara');
		});
	});
	describe('Faces detail view', function(){
		beforeEach(function(){
			browser().navigateTo('../../app/index.html#/faces/cheguevara');
		});
		it('should display cheguevara page', function(){
			expect(binding('face.id')).toBe('cheguevara');
		});
		it('should display the first face image at the main face page', function(){
			expect(element('.facethumb').attr('src')).toBe('img/faces/che.jpg');
		});
		it('should swap main image if a thumbnail was clicked on', function(){
			element('li:nth-child(2) img').click();
			expect(element('img.facethumb').attr('src')).toBe('img/faces/che2.jpg');

			element('li:nth-child(1) img').click();
			expect(element('img.facethumb').attr('src')).toBe('img/faces/che.jpg');
		});
	});
});