angular
  .module('userApp.controllers', [])
  .controller(
    'loginCtrl',
    function ($rootScope, $scope) {
      $rootScope.isShow = false

    })
  .controller(
    'registCtrl',
    function ($rootScope, $scope) {
      $rootScope.isShow = false

    });