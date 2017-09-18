(function () {
'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundList.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundList',
      bindToController: true
    };

    return ddo;
  }


  function FoundItemsDirectiveController() {
    var foundList = this;

    foundList.emptyList = function () {
      if (foundList.found === null){
        return false;
      } else {
        return foundList.found.length === 0;
      }
    };
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menuFilter = this;
    menuFilter.found = null;

    menuFilter.search = function () {
      var promise = MenuSearchService.getMatchedMenuItems(menuFilter.searchTerm)

      promise.then(function (response) {

        menuFilter.found = response;

      })
      .catch(function (error) {
        console.log(error);
      })
    }

    menuFilter.removeItem = function (itemIndex) {
      menuFilter.found.splice(itemIndex, 1);
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath ) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function(result){
        var filteredResponse = [];
        if (searchTerm == null || searchTerm.trim().length == 0){
          return filteredResponse;
        }
        for(var i=0; i < result.data.menu_items.length; i++){
          if (result.data.menu_items[i].description.indexOf(searchTerm) !== -1){
            filteredResponse.push(result.data.menu_items[i]);
          }
        }

        return filteredResponse;
      });

    }
  }

})();
