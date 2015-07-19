(function() {
  'use strict';
  /**
   * @ngdoc Factory
   * @name jwtDemo.Auth.Factory.AuthFactory
   * @module jwtDemo.Auth
   *
   * @description
   * Auth module factory for business logics and factory methods
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('jwtDemo.Auth')
    .service('AuthFactory', AuthFactory);

  /* @ngInject */
  function AuthFactory(AuthModel, aiStorage, APP_CONFIG) {
    /**
     * create factory object for factory properties and methods
     * @True {Object}
     */
    var authFactory = {};

    authFactory.refreshAuthDetails = function() {
      var _credentials = aiStorage.get('credentials');
      if (_credentials && !authFactory.isTokenExpire(AuthModel.authDetails)){
        angular.extend(AuthModel.authDetails, _credentials);
      }
      return AuthModel.authDetails;
    };

    authFactory.getAuthDetail = function() {
      return authFactory.isTokenExpire(AuthModel.authDetails) ? AuthModel.authDetails : null;
    };

    authFactory.setAuthDetail = function(_storageKey, _authDetails) {
      angular.extend(AuthModel.authDetails, _authDetails);
      aiStorage.set('credentials', _authDetails);
    };

    authFactory.getAppToken = function() {
      return APP_CONFIG.APP_TOKEN;
    };

    authFactory.isTokenExpire = function(_authDetails) {
      return (_authDetails && moment(_authDetails.expiry).isValid()) ? moment(_authDetails.expiry).unix() < moment.utc().unix() : false
    };

    return authFactory;

  }
})();