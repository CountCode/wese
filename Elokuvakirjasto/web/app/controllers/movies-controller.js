MyApp.controller('MovieController', function ($scope, FirebaseService) {

    $scope.movies = FirebaseService.getMovies();

    MyApp.controller('addMovieController', function ($scope, FirebaseService) {

        $scope.addMovie = function () {
            //    console.log("add Movie");

            FirebaseService.addMovie({
                name: $scope.$parent.name,
                director: $scope.$parent.director,
                released: $scope.$parent.released,
                description: $scope.$parent.description
            });
            console.log("addMovie");
            $location.path('#/movies');
        };

    });

});


