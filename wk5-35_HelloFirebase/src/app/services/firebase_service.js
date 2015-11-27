HelloApp.service('FirebaseService', function($firebase){
	// Keskustele Firebasen kanssa tämän palvelun avulla
        var firebaseRef = new Firebase("https://vivid-torch-5618.firebaseio.com/");
        var sync = $firebase(firebaseRef);
        var data = sync.$asObject();
        console.log(data);
      
        this.fetchData = function(){
            return data;
        }
});