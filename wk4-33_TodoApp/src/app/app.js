/* global angular */

var TodoApp = angular.module('TodoApp', []);

        TodoApp.controller('TodoController', function($scope){
            $scope.tehtavat = [];
            $scope.uusiTeht= "";        

            $scope.tehtava = function(nimi) {
                var tehtavanNimi = nimi;
                var tehty = false;            
            };
            
            $scope.uusiTehtava = function(nimi){
                console.log("uusitehtävä!");
                var tehtava = new $scope.tehtava(nimi);
                $scope.tehtavat.push(tehtava);
            };

            $scope.kaikkiTehty = function() {
                console.log("kaikki tehty");
            };

            $scope.poistaKaikki = function() {
                console.log("poista kaikki");
            };

        });