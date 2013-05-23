'use strict';

/* jasmine specs for controllers go here */

describe('PhoneCat controllers', function() {
	describe('FaceListCtrl', function(){
		var scope, ctrl, $httpBackend;

		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('faces/faces.json').
				respond([{name:'Che Guevara'},{name:'Wladimir Iljitsch Lenin'}]);

			scope=$rootScope.$new();
			ctrl=$controller(FaceListCtrl, {$scope: scope});
		}));


		it('should create "faces" model with 2 faces fetched from xhr', function(){
			expect(scope.faces).toBeUndefined();
			$httpBackend.flush();

			expect(scope.faces).toEqual([{name:'Che Guevara'},
				{name:'Wladimir Iljitsch Lenin'}]);
		});


		it('should set the default value of orderProp model', function(){
			expect(scope.orderProp).toBe('age');
		});
	
	});

	describe('FaceDetailCtrl', function(){
		var scope, ctrl, $httpBackend,
			xyzFaceData = function(){
				return{
					name:'face xyz',
					images:['image/url1.png','image/url2.png']
				}
			};

		beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller){
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('faces/xyz.json').respond(xyzFaceData());

			$routeParams.faceId = "xyz";
			scope=$rootScope.$new();
			ctrl=$controller(FaceDetailCtrl, {$scope: scope});
		}));

		it('should fetch face detail', function(){
			expect(scope.face).toBeUndefined();
			$httpBackend.flush();

			expect(scope.face).toEqual(xyzFaceData());
		});

    });
});