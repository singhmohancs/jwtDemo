(function() {
  'use strict';
  /**
   * @ngdoc States
   * @name jwtDemo.Core.States
   * @module jwtDemo.Core
   *
   * @description
   * Core module state configurations
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('jwtDemo.Core')
    .config(coreStateConfig);

  /* @ngInject */
  function coreStateConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/auth/auth.html',
        controller: 'AuthController',
        resolve: {
          auth: ["AuthFactory",
            function(AuthFactory) {
              AuthFactory.refreshAuthDetails();
            }
          ]
        }
      });
  }
})();