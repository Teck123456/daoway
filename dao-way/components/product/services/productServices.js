angular.module('productApp.services', []).factory('productService', function ($http) {
  return {
    getItems: function () {
      return $http.get('http://localhost:808/sellers');
    }
  };
});
