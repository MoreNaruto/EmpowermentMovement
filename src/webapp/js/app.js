var EventController = require('./controller/events.js');

var app = angular.module('EmpowermentMovement', [
	'empowermentMovement.eventController'
	]);

app
	.controller('EventController', ['$scope', EventController]);