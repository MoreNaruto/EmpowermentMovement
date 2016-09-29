describe ('EventController', function() {
	beforeEach(angular.mock.module('EmpowermentMovement'));

  var $controller;

	it('should return true', inject(['EventController',
    function(EventController) {
      expect(EventController.value).toEqual(true);
    }]) 
	);
});