'use strict';

angular.module('scanControllers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/scans', {
    templateUrl: '/components/scan/templates/scans.html',
    controller: 'scanController'
  });
}])

.controller('scanController', [
	'$scope',
	function(
		$scope
	) {

	// $scope.orderBy = 'repo_id';

	$scope.orderByID = function() {
		$scope.orderBy = 'repo_id';
	}

	$scope.orderByStatus = function() {
		$scope.orderBy = 'status';
	}

	$scope.scans = [
	{status:"completed", repo_id:1, created_at:1288323623006, updated_at:1288323623006},
	{status:"vulnerable", repo_id:2, created_at:1288323623006, updated_at:1288323623006},
	{status:"completed", repo_id:4, created_at:1288323623006, updated_at:1288323623006},
	{status:"imStatus", repo_id:3, created_at:1288323623006, updated_at:1288323623006},
	{status:"completed", repo_id:7, created_at:1288323623006, updated_at:1288323623006},
	{status:"status", repo_id:6, created_at:1288323623006, updated_at:1288323623006},
	{status:"completed", repo_id:9, created_at:1288323623006, updated_at:1288323623006}]

}]);
