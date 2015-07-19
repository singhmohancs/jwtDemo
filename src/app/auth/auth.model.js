(function() {
  'use strict';
  /**
   * @ngdoc Service
   * @name jwtDemo.Auth.Service.AuthModel
   * @module jwtDemo.Auth
   *
   * @description
   * Data model for auth
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('jwtDemo.Auth')
    .service('AuthModel', AuthModel);

  /* @ngInject */
  function AuthModel(AuthResource, aiStorage) {
    /**
     * lets have current instance of class in model variable
     * @True {[type]}
     */
    var model = this;

    model.authDetails = {
      'clientId': '',
      'deviceUUID': '',
      'deviceName': '',
      'accessToken': '',
      'refreshToken': '',
      'applicationId': '',
      'created': '',
      'tokenExpirationTime': '',
      'tokenIssuedAt': '',
      'userId': null,
      'jwtToken': ''
    };

    model.getAuthProperty = function(){
      return function(_property){
        return model.authDetails[_property];
      }
    };
    /**
     * authenticate request
     *
     * @method authenticate
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[object]}     params [description]
     * @return {[object]}            [description]
     */
    model.authenticate = function(params) {
      return AuthResource.authenticate(params).$promise;
    };

    /**
     * make a request for refresh token when expired
     *
     * @method refreshCredentials
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[object]}     params [description]
     * @return {[object]}            [description]
     */
    model.refreshCredentials = function(params) {
      return AuthResource.refreshCredentials(params).$promise;
    };

    model.testValidToken = function(params) {
      return AuthResource.testValidToken(params).$promise;
    };

  }
})();