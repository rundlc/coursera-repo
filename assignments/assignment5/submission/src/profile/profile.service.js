(function () {
"use strict";

angular.module('common')
.service('ProfileService', ProfileService);


ProfileService.$inject = ['$http', 'ApiPath'];
function ProfileService($http, ApiPath) {
  var service = this;

  var profile = new Object();

  service.setProfile = function (firstname, lastname, email, phoneNumber, favoriteItem) {

    profile.firstname = firstname;
    profile.lastname = lastname;
    profile.email = email;
    profile.phoneNumber = phoneNumber;
    profile.favoriteItem = favoriteItem;

    return $http.get(ApiPath + '/menu_items/' + favoriteItem + '.json')
    .then(function (response) {
      return true;
    }, function (response) {
      return false;
    });

  };


  service.getProfile = function () {

    return profile;

  };

  service.getMenuItem = function () {

    if (profile.email){
      return $http.get(ApiPath + '/menu_items/' + profile.favoriteItem + '.json')
      .then(function (response) {
        return response.data;
      }, function (response) {
        return null;
      });
    } else {
      return null;
    }

  };
}

})();
