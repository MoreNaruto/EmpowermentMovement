require('angular');
var EventController = require('./controller/events');

var app = angular.module('EmpowermentMovement', [])

app
	.controller('EventController', ['$scope', EventController])