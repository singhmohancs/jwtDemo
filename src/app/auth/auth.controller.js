(function() {
  'use strict';
  /**
   * @ngdoc Controller
   * @name jwtDemo.Auth.Controller.AuthController
   * @module jwtDemo.Auth
   *
   * @description
   * Authentication stuff goes here
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('jwtDemo.Auth')
    .controller('AuthController', AuthController);

  /* @ngInject */
  function AuthController($scope, $q, AuthModel, APP_CONFIG, AuthFactory) {
    $scope.userDetails = AuthModel.getAuthProperty();
    $scope.tokenExpireTime = $scope.userDetails('tokenExpirationTime') ? new moment($scope.userDetails('tokenExpirationTime')) : '';

    $scope.authenticate = function() {
      AuthModel.authenticate({
        applicationId: APP_CONFIG.APP_TOKEN,
        deviceUUID: APP_CONFIG.APP_TOKEN,
        deviceName: APP_CONFIG.APP_TOKEN
      }).then(function(response) {
        AuthFactory.setAuthDetail('credentials', response);
      });
    };

    $scope.refreshCredentials = function() {
      if (AuthFactory.isTokenExpire()) throw Error("User is not authorized");

      return AuthModel.refreshCredentials({
        accessToken: $scope.userDetails('accessToken'),
        refreshToken: $scope.userDetails('refreshToken')
      }).then(function(response) {
        AuthFactory.setAuthDetail('credentials', response);
      });
    };

    $scope.testValidToken = function() {
      AuthModel.testValidToken().then(function(response) {
        console.log(response);
      });

    };
  }

})(angular);