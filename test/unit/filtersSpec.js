'use strict';

/* jasmine specs for filters go here */

describe('ddda', function() {
	beforeEach(module('facecatFilters'));

	describe('ddda', function(){
		it('should convert boolean values in unicode checkmark or cross',
			inject(function(dddaFilter){
				expect(dddaFilter(true)).toBe('\u2713');
				expect(dddaFilter(false)).toBe('\u2718');
		}));
	});
});