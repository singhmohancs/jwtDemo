(function() {
  'use strict';
  /**
   * @ngdoc factory
   * @name jwtDemo.Core.factory.authHttpInterceptor
   * @module jwtDemo.Core
   *
   * @description
   * Request interceptor to modify request headers
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('jwtDemo.Core')
    .factory('authHttpInterceptor', AuthHttpInterceptor)
    .config(['$httpProvider',
      function($httpProvider) {
        $httpProvider.interceptors.push('authHttpInterceptor')
      }
    ]);

  /* @ngInject */
  function AuthHttpInterceptor(APP_CONFIG, $injector) {
    return {
      request: function(requestConfig) {
        var AuthFactory = $injector.get('AuthFactory');
       requestConfig.headers['X-Reference'] = APP_CONFIG.API_REQUEST_PARAMS.deviceUUID;
        requestConfig.headers['X-UTC-Timestamp'] = moment.utc().unix();
        var authDetail = AuthFactory.getAuthDetail(),
          appToken = AuthFactory.getAppToken();
        if (authDetail && appToken) {
          requestConfig.headers.Authorization = authDetail.jwtToken
        }
        return requestConfig;
      },
      response: function(response) {
        return response;
      },
      responseError: function(responseError) {
        console.log(responseError);
      }
    };
  }

})();