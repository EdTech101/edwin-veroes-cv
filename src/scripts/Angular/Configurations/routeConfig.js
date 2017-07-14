/*configurations for routing*/
(function() {
  app.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "src/scripts/angular/Views/index.html"
    })
    .when("/education", {
      templateUrl: "src/scripts/angular/Views/timeline.html"
    })
    .when("/work", {
      template: "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
    })
    .otherwise({
      redirectTo: '/'
    })
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
  }]);
})();
