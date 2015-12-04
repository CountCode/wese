// Toteuta moduulisi tänne
var MyApp = angular.module('MyApp', ['firebase']);

MyApp.service('FirebaseService', function ($firebaseArray) {
    // Keskustele Firebasen kanssa tämän palvelun avulla
    var firebaseRef = new Firebase("https://vivid-torch-5618.firebaseio.com/movies");
    var movies = $firebaseArray(firebaseRef);  

    this.getMovies = function() {
        return movies;
    };
    
    this.addMovie = function(movie){
        movies.$add(movie);
    }

});

