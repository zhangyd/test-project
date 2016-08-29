'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngMaterial',
  'ngRoute',
  'repositoryControllers',
  'repositoryDirectives',
  'scanControllers'
  // ,'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/repositories'});
}]);
