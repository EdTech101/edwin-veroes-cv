'use strict';
var app = angular.module("app", ['ngRoute']);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        template : "<h1>text template why u don't inject</h1>"
    })
    .when("/banana", {
          template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
      })
      .when("/tomato", {
          template : "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
      })
    .otherwise({
    redirectTo: 'src/'
});
}]);
