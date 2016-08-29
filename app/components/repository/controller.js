'use strict';

angular.module('repositoryControllers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/repositories', {
    templateUrl: '/components/repository/templates/repository.html',
    controller: 'repositoryCtrl'
  });
}])

.controller('repositoryCtrl', [
	'$scope',
	'$mdSidenav',
	function(
		$scope,
		$mdSidenav
	) {

	// $scope.openLeftMenu = function() {
	// 	$mdSidenav('left').toggle();
	// };

	$scope.repositories = [
	{id:1, name:'projectOne',owner:'UserOne', full_name:'fullNameOne', html_url:'http://www.github.com/projectOne', description:'blahblahblah', language:'python', size:5, created_at:1288323623006, updated_at:1288323623006},
	{id:2, name:'projectTwo', owner:'UserTwo', full_name:'fullNameTwo', html_url:'http://www.github.com/projectTwo', description:'blahblahblah', language:'java', size:5, created_at:1288323623007, updated_at:1288323623007},
	{id:3, name:'projectThree', owner:'UserThree', full_name:'fullNameThree', html_url:'http://www.github.com/projectThree', description:'blahblahblah', language:'python', size:5, created_at:1288323623008, updated_at:1288323623008},
	{id:4, name:'projectFour',owner:'UserFour', full_name:'fullNameFour', html_url:'http://www.github.com/projectFour', description:'blahblahblah', language:'ruby', size:5, created_at:1288323623009, updated_at:1288323623009},
	{id:5, name:'projectFive', owner:'UserFive', full_name:'fullNameFive', html_url:'http://www.github.com/projectFive', description:'blahblahblah', language:'python', size:5, created_at:1288323623010, updated_at:1288323623010},
	{id:6, name:'projectSix', owner:'UserSix', full_name:'fullNameSix', html_url:'http://www.github.com/projectSix', description:'blahblahblah', language:'ruby', size:5, created_at:1288323623011, updated_at:1288323623011},
	{id:7, name:'projectSeven',owner:'UserSeven', full_name:'fullNameSeven', html_url:'http://www.github.com/projectSeven', description:'blahblahblah', language:'python', size:5, created_at:1288323623012, updated_at:1288323623012},
	{id:8, name:'projectEight', owner:'UserEight', full_name:'fullNameEight', html_url:'http://www.github.com/projectEight', description:'blahblahblah', language:'python', size:5, created_at:1288323623013, updated_at:1288323623013},
	{id:9, name:'projectNine', owner:'UserNine', full_name:'fullNameNine', html_url:'http://www.github.com/projectNine', description:'blahblahblah', language:'java', size:5, created_at:1288323623014, updated_at:1288323623014}]


}]);
