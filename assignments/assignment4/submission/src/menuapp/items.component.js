(function () {
'use strict';

angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'src/menuapp/templates/menuItems.template.html',
  bindings: {
    items: '<'
  }
});

})();
