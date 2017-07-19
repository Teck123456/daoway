angular.module('homeApp.services', []).factory('indexService', function ($http) {
  return {
    getMenuList: function () {
      return $http.get('http://192.168.1.12:3000/catos');
    },
    getAllItems: function () {
      return $http.get('http://192.168.1.12:3000/providers');
    }
  };
});
