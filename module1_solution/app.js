(function (){
'use strict';
    
angular.module('LunchCheck', [])
 .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope){ 
    $scope.foodList = "";
    $scope.numOfFood = 0;
    
    $scope.checkFood = function () {
        var totalFood = foodCount($scope.foodList);
        $scope.numOfFood = totalFood;               
    };
    
    function foodCount(str){
        var count = str ? str.split(/,/): 0;
        return count ? count.length : '';
    };

}
    
})();