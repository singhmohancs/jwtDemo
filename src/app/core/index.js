(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name Core
   *
   * @module jwtDemo.Core
   *
   * @description
   * jwtDemo.Core is a core module which load the angular third part modules
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('jwtDemo.Core', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngResource',
      'ui.router',
      'ui.bootstrap',
      'angular-storage'
    ]);
})();