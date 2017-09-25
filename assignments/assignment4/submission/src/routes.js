(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Category page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-menuCategories.template.html',
    controller: 'MenuCategoriesController as menuCategories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item list
  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/main-menuItems.template.html',
    controller: 'MenuItemsController as menuItems',
    resolve: {
       items: ['$stateParams', 'MenuDataService',
         function ($stateParams, MenuDataService) {
         return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
       }]
     }
  });

}

})();
