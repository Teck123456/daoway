angular.module('homeApp.services', []).factory('indexService', function ($http) {
  return {
    login: function (user) {
      return $http.get("system/login", user);
    },
    register: function (user) {
      return $http.post("system/register", user);
    },
    getMenu: function () {
      return $http.get('http://localhost:808/projects');
    },
  };
});
