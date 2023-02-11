(function (){
'use strict';
    
angular.module('LunchCheck', [])
 .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope){ 
    $scope.foodList = "";
    $scope.numOfFood = 0;
    
    $scope.displayNumOfFood = function () {
        var totalFood = foodCount($scope.foodList);
        $scope.numOfFood = totalFood;     
    };
    
    function foodCount (str){
        var totalFood = 0;
        for (var i = 0; i < str.length; i++) {
          totalFood += str.charCodeAt(i);
        }
        return totalFood;
    }
    
}
    
})();