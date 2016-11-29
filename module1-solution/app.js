( function(){
'use strict'

angular.module("LunchCheck", [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.lunchItems="";
    $scope.lunchStatus="";
    $scope.controlStyle="";
    $scope.checkLunch = function(){
        var status = "";
        var itemCount= getCountOfNonEmptyItems( $scope.lunchItems.split(","));
        console.log(itemCount);
        if(itemCount == 0){
            status="Please enter data first";
            $scope.controlStyle=""
        } else if(itemCount<=3){
            status="Enjoy!";
            $scope.controlStyle="has-success"
        } else {
            status="Too Much!";
            $scope.controlStyle="has-error"
        }
        $scope.lunchStatus = status;
    };
function getCountOfNonEmptyItems(items){
        var cnt=0
        for (var item in items) {
          if (items[item].trim() !="") {
            ++cnt;
          }
        }
        return cnt;
    }
}
})();
