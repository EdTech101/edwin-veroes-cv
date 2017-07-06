var app =angular.module('app',[]);
app.controller('imgCtrl',function() {
  var self = this;
    self.imgUrl = 'https://www.gravatar.com/avatar/'+CryptoJS.MD5("veroesedwin@gmail.com")+'?size=600';
});
