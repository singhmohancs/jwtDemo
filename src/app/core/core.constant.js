(function() {
  'use strict';
  /**
   * @ngdoc Constants
   * @name jwtDemo.Core.Constant.ENV
   * @module jwtDemo.Core
   *
   * @description
   * Holds envoirment related properties
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('jwtDemo.Core')
    .constant('APP_CONFIG', {
      'API_REQUEST_PARAMS': {
        'applicationId': 'jr6V8KpEWkDqdXaqFWBmxhtbbXwJsbwscFIOSreI0MM=',
        'deviceUUID': '29cf6d9f-cbad-465e-a550-55721e05c43c',
        'deviceName': 'Mozilla\/5.0 (X11; Linux x86_64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/43.0.2357.130 Safari\/537.36'
      },
      'APP_TOKEN': 'jr6V8KpEWkDqdXaqFWBmxhtbbXwJsbwscFIOSreI0MM=',
      'END_POINT': {
        'AUTH': 'http://fd-api-2-testing.freelancediary.com'
      }
    });

})();