angular
  .module('homeApp.controllers', [])
  .controller(
    'indexCtrl',
    function($rootScope, $scope, indexService) {
      $rootScope.isShow = true;

      indexService.getMenu().success(function (data) {
        console.log(data)
        $scope.contents = data;

      })

    });