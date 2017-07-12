angular
  .module('navFootApp.controllers', [])
  .controller(
    'navFootCtrl',
    function($rootScope, $scope, $location) {
      $rootScope.isShow = true;
      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };

    });