angular.module('userApp.services', []).factory('userService', function ($http) {
  return {
    login: function (user) {
      return $http.post("/login", user);
    },
    register: function (user) {
      return $http.post("/register", user);
    }
  };
});