HelloApp.controller('HelloController', function($scope, FirebaseService){
	// Toteuta kontrolleri tänne
        $scope.data = FirebaseService.fetchData();
});