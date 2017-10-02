(function () {
"use strict";

angular.module('profile')
.controller('ProfileController', ProfileController);


  ProfileController.$inject = ['profile', 'itemInfo', 'ApiPath'];
  function ProfileController(profile, itemInfo, ApiPath) {
    var profileCtrl = this;

    profileCtrl.profile = profile;
    profileCtrl.itemInfo = itemInfo;
    profileCtrl.itemURL = ApiPath + "/images/" + profile.favoriteItem;

  };

})();
