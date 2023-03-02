(function (){
'use strict';
    
angular.module('LunchCheck', [])
 .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope){ 
    $scope.foodList = "";
    $scope.numOfFood = 0;
    $scope.message = "";
    
    $scope.checkFood = function () {
        var totalFood = foodCount($scope.foodList);
        $scope.numOfFood = totalFood;
        if (totalFood == 0){
            showMessage("Please enter your data first.");
        }
        else if (totalFood <=3){
            showMessage("Enjoy!");
        }
        else {
            showMessage("Too much!");
        }
    };
    
    var showMessage = function(message){
        $scope.message = message;
    };
    
    function foodCount(str){
        var count = str ? str.split(/,/): 0;
        return count ? count.length : '';
    }

}
    
})();