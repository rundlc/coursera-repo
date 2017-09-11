(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyArray = [ { item_name: 'apples', item_quantity: 5},
                     { item_name: 'oranges', item_quantity: 3},
                     { item_name: 'bananas', item_quantity: 10},
                     { item_name: 'boxes of cereal', item_quantity: 2},
                     { item_name: 'packages of ramen noodles', item_quantity: 4} ];
  var alreadyBoughtArray = [];

  service.buyItem = function (itemIndex) {
    var boughtItem = toBuyArray[itemIndex];
    toBuyArray.splice(itemIndex, 1);
    alreadyBoughtArray.push(boughtItem);
  };

  service.getToBuyItems = function () {
    return toBuyArray;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtArray;
  };
}

})();
