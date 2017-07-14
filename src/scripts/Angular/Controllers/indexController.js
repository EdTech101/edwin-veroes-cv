'use strict';
(function() {
  app.controller('indexCtrl', indexCtrl);

  indexCtrl.$inject = ['$interval'];

  function indexCtrl($interval) {
    var self = this;
    self.age = calcAge();
    self.address = 'Urb. La Boyera, Residencias Parque Araguaney, El Hatillo - Caracas –  Venezuela, 1083';
    self.email = 'veroesedwin@gmail.com';
    self.cellphone = '+(58) 416-614-7399';
    self.showTittle = true;

      function calcAge() {
        var born = new Date("11-01-1994");
        var today = new Date();
        var age = today.getDate() <= 11 && today.getMonth() == 0 ? (today.getFullYear() - born.getFullYear() - 1) : today.getFullYear() - born.getFullYear();
        return age;
      }
  }
})();
