(function () {
"use strict";

angular.module('profile')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['ProfileService'];
function RegisterController(ProfileService) {
  var registerCtrl = this;

  registerCtrl.submit = function () {
    var promise = ProfileService.setProfile(registerCtrl.firstname,
                              registerCtrl.lastname,
                              registerCtrl.email,
                              registerCtrl.phone,
                              registerCtrl.favoriteItem);

    promise.then(function (response) {
      if (response){
        registerCtrl.notFound = false;
        registerCtrl.submitted = true
      } else {
        registerCtrl.notFound = true;
        registerCtrl.submitted = false;  
      }
    })
    .catch(function (error) {
      registerCtrl.notFound = true;
      registerCtrl.submitted = false;

    });

  };
}


})();
