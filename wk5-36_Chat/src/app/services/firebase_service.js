ChatApp.service('FirebaseService', function($firebaseArray) {
    // Keskustele Firebasen kanssa tämän palvelun avulla
    var usersFirebaseRef = new Firebase("https://vivid-torch-5618.firebaseio.com/users"); 
    var users = $firebaseArray(usersFirebaseRef);
 /*   
    var messagesFirebaseRef = new Firebase('https://vivid-torch-5618.firebaseio.com/messages');
    var messages = $firebaseArray(messagesFirebaseRef);


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
    */
});