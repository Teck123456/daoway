angular.module('providerApp.services', []).factory('providerService', function ($http) {
  return {
    getProviders: function () {
      return $http.get('http://192.168.1.12:3000/providers');
    }
  };
});
