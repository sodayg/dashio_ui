// main module declaration
var app = angular.module("app", [
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'ngCookies'
]);

 



app.controller('appMainCtrl',function($scope,$cookies,$state){
  $state.go('home');
});

 




app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("login");
      $stateProvider
        .state('home', {
          url: "/Home",
          templateUrl: "templates/home.html",
        })
        .state('config', {
          url: "/Config",
          templateUrl: "templates/config.html",
        })    
 });

 
 