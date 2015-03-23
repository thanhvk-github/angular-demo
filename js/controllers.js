var supermansCtrl = angular.module('supermansCtrl', []);

supermansCtrl.controller('listSupermansCtrl', ['$scope', '$http', function($scope, $http){
		$http.get('supermans/listsuperman.json').success(function(data){
			$scope.supermans = data;		
	});

	$scope.order = 'name';
}]);

supermansCtrl.controller('detailSupermansCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
	$http.get('supermans/' + $routeParams.id + '.json').success(function(data){
		$scope.supermans = data;
		$scope.mainImageUrl = $scope.supermans.imgUrl[0];
	});
	$scope.setImageUrl = function(img){
		$scope.mainImageUrl = img;
	}
}]);
