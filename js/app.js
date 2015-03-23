var ProfileSupermansApp = angular.module('ProfileSupermansApp', ['ngRoute', 'supermansCtrl']);

ProfileSupermansApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'templates/list-supermans.html',
		controller: 'listSupermansCtrl'
	})
	.when('/:id', {
		templateUrl: 'templates/detail-supermans.html',
		controller: 'detailSupermansCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
}]);