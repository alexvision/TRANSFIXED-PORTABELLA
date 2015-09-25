// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.friendsController', 'starter.messageController', 'starter.authController', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('friends', {
    url: '/friends',
    templateUrl: 'templates/friends.html',
    controller: 'FriendsController'
  })

  .state('auth', {
    url: '/auth',
    templateUrl: 'templates/auth.html',
    controller: 'AuthController'
  })

  .state('message', {
    url: '/message',
    templateUrl: 'templates/message.html',
    controller: 'MessageController'
  });

  $urlRouterProvider.otherwise('/friends');
});
