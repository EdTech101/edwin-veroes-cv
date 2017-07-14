'use strict';
(function() {
app.controller('imgCtrl', imgCtrl);

  imgCtrl.$inject = [];

  function imgCtrl() {
    var self = this;
    self.imgUrl = 'https://www.gravatar.com/avatar/' + CryptoJS.MD5("veroesedwin@gmail.com") + '?size=600';
  }
})();
