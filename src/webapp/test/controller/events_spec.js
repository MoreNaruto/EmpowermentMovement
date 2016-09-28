"use strict";

describe ('EmpowermentMovement.EventController', function() {
	var eventController;

	beforeEach(module('EmpowermentMovement.EventController'));
  	beforeEach(inject(function($injector) {
    	eventController = $injector.get("EmpowermentMovement.EventController");
  	}));

  	describe("getAnEvent()"), function () {
  		it("should return an event", function (){
  			expect(eventController.getEvent()).toEqual(true);
  		})
  	}

})