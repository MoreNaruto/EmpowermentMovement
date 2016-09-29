var EventController = require('./controller/events.js');

var app = angular.module('EmpowermentMovement', [
	'EmpowermentMovement.EventController'
	]);

app
	.controller('EventController', ['$scope', EventController]);