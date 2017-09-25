(function () {
'use strict';

angular.module('MenuApp')
.component('menuCategories', {
  templateUrl: 'src/menuapp/templates/menuCategories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
