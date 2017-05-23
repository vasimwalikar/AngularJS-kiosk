(function() {

  "use strict";

  var App = angular.module("App", [
    "App.controllers",
    "App.services",
    "App.directives",
    "App.filters",
    "ngRoute",
    "ngResource"
  ]);

  App.config(function ($routeProvider) {
    $routeProvider
		.when('/home', {
           templateUrl: 'view/home2.html'
		})
	  
    .when('/home2', {
           templateUrl: 'view/home2.html'
    })

    .when('/issue-books', {
           templateUrl: 'view/issue-books.html'
    })

    .when('/issue-books-success', {
           templateUrl: 'view/issue-books-success.html'
    })

    .when('/return-books', {
           templateUrl: 'view/return-books.html'
    })

    .when('/return-books-success', {
           templateUrl: 'view/return-books-success.html'
    })

    .when('/my-bookshelf', {
           templateUrl: 'view/my-bookshelf.html'
    })

    .when('/my-profile', {
           templateUrl: 'view/my-profile.html'
    })
	  
    .when('/search', {
           templateUrl: 'view/search.html'
    })

    .when('/my-subscription', {
           templateUrl: 'view/my-subscription.html'
    })

		.otherwise({redirectTo : 'home'});
  });

}());