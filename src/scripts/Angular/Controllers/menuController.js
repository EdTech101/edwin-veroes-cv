'use strict';
(function() {
  angular.module('myApp')
    .controller('menuCtrl', menuCtrl);

  menuCtrl.$inject = [];

  function menuCtrl() {
    var self = this;
    self.showMenu = false;

    self.toogleMenu = function() {
      self.showMenu = !self.showMenu;
    }
  }
})();
