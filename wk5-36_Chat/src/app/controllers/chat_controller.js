ChatApp.controller('ChatController', function($scope, FirebaseService){
	// Toteuta kontrolleri tänne
//        $scope.messages = FireballService.getMessages();
//        $scope.users = FireballService.getusers();
        $scope.newText = '';
        $scope.newUser = '';
//        $scope.activeUser;
/*        
        $scope.addMessage = function(){
            if($scope.newText != ''){
                var d = new Date();
                FirebaseService.addMessage({
                    text: $scope.newText,
                    user: $scope.activeUser,
                    added: d  
                });
            $scope.newText = '';       
            }
        }
       
        $scope.addUser = function(){
            if($scope.newUser != ''){
                FirebaseService.addUser({
                    user: $scope.newUser 
                });
            $scope.activeUser=$scope.newUser;
            $scope.newUser = '';
            }
        }        
        */
});