(function() {
  'use strict';
  /**
   * @ngdoc Factory
   * @name jwtDemo.Auth.Factory.AuthResource
   * @module jwtDemo.Auth
   *
   * @description
   * Intract with rest services
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('jwtDemo.Auth')
    .factory('AuthResource', AuthResource);

  /* @ngInject */
  function AuthResource($resource, APP_CONFIG) {
    /**
     * response handler
     */
    function transformResponseHandler(responseData, headers) {
      var _data = angular.fromJson(responseData);
      _data.jwtToken = headers('Authorization');
      return _data;
    }

    return $resource(APP_CONFIG.END_POINT.AUTH + '/auth', null, {
      /**
       * make a request for authentication
       * @True {Object}
       */
      authenticate: {
        method: 'POST',
        transformResponse: transformResponseHandler
      },
      /**
       * make a request to refresh token
       * @True {Object}
       */
      refreshCredentials: {
        method: 'POST',
        url: APP_CONFIG.END_POINT.AUTH + '/auth/refresh',
        transformResponse: transformResponseHandler
      },
      testValidToken :{
        method :'GET',
        url:APP_CONFIG.END_POINT.AUTH + '/auth/test_fdjwtv1',
      }
    });


  }
})();