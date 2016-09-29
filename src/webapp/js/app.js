var EventController = require('./controller/events.js');

var app = angular.module('EmpowermentMovement', []);

app
	.controller('EventController', ['$scope', EventController]);