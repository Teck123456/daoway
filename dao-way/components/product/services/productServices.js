angular.module('productApp.services', []).factory('productService', function ($http) {
  return {
    getService: function () {
      return $http.get('http://192.168.1.12:3000/providers');
    }
  };
});
