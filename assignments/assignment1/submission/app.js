(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchElements = "";
  $scope.getLunchElements = function () {
    var lunchElementCount = countElements($scope.lunchElements);
    if (lunchElementCount === 0){
      $scope.message = "Please enter data first";
    } else if (lunchElementCount <= 3){
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };

  function countElements(lunchCSV) {
    if (lunchCSV == ""){
      return 0;
    }
    else {
      return lunchCSV.split(",").length;
    }
  }

}

})();
