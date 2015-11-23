TodoApp.controller('TodoController', function($scope){
// Toteuta kontrolleri tähän
            $scope.tehtavat = [];
            $scope.todosDone=0;
            $scope.todosRemain=0;

            Tehtava = function() {
                var tehtavanNimi = "";
                var tehty = false; 
                var prioriteetti = 1;
                
                this.getPrioriteetti = function() {
                    return this.prioriteetti;
                };
                
                this.setPrioritetti = function(pri) {
                    this.prioriteetti = pri;
                };
     
                this.setTehtavanNimi = function(nimi) {
                    this.tehtavanNimi = nimi;
                };
                
                this.getTehtavanNimi = function() {
                    return this.tehtavanNimi;
                };
                
                this.getTehty = function() {
                    return this.tehty;
                };
                
                this.setTehty = function(tehty) {
                    this.tehty = tehty;
                };
            };
           
            
            $scope.lisaa = function(){
                console.log("uusitehtävä!");
                console.log($scope.uusiTeht);
                var teht = new Tehtava();
                teht.setTehtavanNimi($scope.uusiTeht);
                teht.setPrioritetti(1);
                teht.setTehty(false);
              //  debugger;
                console.log(teht.getTehtavanNimi());
                $scope.tehtavat.push(teht);
                console.log($scope.tehtavat[0].getTehtavanNimi());
                $scope.jarjesta();
            };

            $scope.kaikkiTehty = function() {
                console.log("kaikki tehty");
                var i;
                for (i=0; i<$scope.tehtavat.length; i++) {
                    console.log($scope.tehtavat[i].getTehtavanNimi());
                    $scope.tehtavat[i].setTehty(true);
                }
                
            };

            $scope.poistaKaikki = function() {
                console.log("poista kaikki");            
                var r = confirm("Poista kaikki!");
                if (r == true) {
                    console.log("You pressed OK!");
                    $scope.tehtavat = [];
                } else {
                    console.log("You pressed Cancel!");
                }                
            };
            
            $scope.poista = function(task) {
                console.log("poista");
                console.log(task);
                var i = $scope.tehtavat.indexOf(task);
                if(i !== -1) {
                    $scope.tehtavat.splice(i, 1);
                }
            };

            $scope.jarjesta = function() {
                console.log("jarjesta");
                $scope.tehtavat.sort(function(a, b) {return a.getPrioriteetti() - b.getPrioriteetti()});
            }
            
            $scope.$watch('tehtavat', function(newValue, oldValue){
                console.log("tehtävien määrät");
                $scope.todosDone=0;
                $scope.todosRemain=0;
                var i;
                for (i=0; i<$scope.tehtavat.length; i++) {
                    console.log($scope.tehtavat[i].getTehtavanNimi());
                    if ($scope.tehtavat[i].getTehty()==true) {
                        $scope.todosDone++;
                    } else {
                        $scope.todosRemain++;
                    }
                }
              }, true);

});