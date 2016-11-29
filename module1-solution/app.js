( function(){
'use strict'

angular.module("LunchChecker", [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope) {
    $scope.lunchItems="";
    $scope.lunchStatus="";
    $scope.checkLunch = function(){
        var status = "";
        var items = $scope.lunchItems.split(",");
        var itemCount= getCountOfNonEmptyItems(items);
        console.log(itemCount);
        if(itemCount == 0){
            status="Empty";
        } else if(itemCount<=3){
            status="Enjoy!";
        } else {
            status="Too Much!";
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
