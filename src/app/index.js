(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name jwtDemo
   *
   * @module jwtDemo
   *
   * @description
   * Create application module with sub module as dependencies
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular.module('jwtDemo', [
    'jwtDemo.Core',
    'jwtDemo.Auth'
  ]);
})();