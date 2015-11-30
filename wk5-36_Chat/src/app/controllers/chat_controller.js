ChatApp.controller('ChatController', function($scope, FirebaseService){
	// Toteuta kontrolleri tänne
        $scope.messages = FirebaseService.getMessages();
        $scope.users = FirebaseService.getUsers();
        $scope.newText = '';
        $scope.newUser = '';
        $scope.activeUser;
        
        $scope.addMessage = function(){
        //    console.log("add Message");
            if($scope.newText != ''){
                var date = new Date();  // format?
           //     console.log("Date "+date);
                FirebaseService.addMessage({
                    text: $scope.newText,
                    user: $scope.activeUser,
                    added:  date.toLocaleString()
                });
            $scope.newText = '';       
            }
        };
       
        $scope.addUser = function(){
         //   console.log("Add user");
            if($scope.newUser != ''){ // tarkistaa onko kenttä tyhjä
                if (!FirebaseService.userExists($scope.newUser)){
                 //   console.log("ei ole");
                    FirebaseService.addUser({
                    user: $scope.newUser 
                    });
                }
            $scope.activeUser=$scope.newUser;
            $scope.newUser = '';
            }
        };
        
});