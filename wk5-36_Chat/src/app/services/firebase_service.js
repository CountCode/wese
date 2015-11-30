ChatApp.service('FirebaseService', function ($firebase) { // $firebaseArray
    // Keskustele Firebasen kanssa tämän palvelun avulla
    var usersFirebaseRef = new Firebase("https://vivid-torch-5618.firebaseio.com/users");
    var usersSync = $firebase(usersFirebaseRef);  // $firebaseArray
    var users = usersSync.$asArray();  // $firebaseArray
        
    var messagesFirebaseRef = new Firebase('https://vivid-torch-5618.firebaseio.com/messages');
    var messagesSync  = $firebase(messagesFirebaseRef);
    var messages = messagesSync.$asArray();


    this.addMessage = function (message) {
        messages.$add(message);
    };

    this.getMessages = function () {
        return messages;
    };
    
    this.addUser = function (user) {
        users.$add(user);
    };
    
    this.getUsers = function () {
        return users;
    };
    
    this.userExists = function (user) {
      //  console.log("user exists?"+user);
        var isSame = false;
        
        usersFirebaseRef.once("value", function(allUsersSnapshot) {
        allUsersSnapshot.forEach(function(userSnapshot) {
        // Will be called with a messageSnapshot for each child under the /messages/ node
        var key = userSnapshot.key();  // e.g. "-JqpIO567aKezufthrn8"
        var uid = userSnapshot.child("user").val();  // e.g. "barney"
        if (user===uid){
       //     console.log("SERV samat");
            //break
            isSame = true;
            return true;  // forEach
        }
      //  console.log(uid);
      });
    });
    
    
    if (isSame === true) return true;
    else {
     //   console.log("ei löytynyt");
        return false;
    }
    };

});