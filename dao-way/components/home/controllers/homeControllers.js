angular
  .module('homeApp.controllers', [])
  .controller(
    'indexCtrl',
    function($rootScope, $scope, indexService) {
      $rootScope.isShow = true;

      indexService.getMenuList().success(function (data) {
        $scope.items = data;
        console.log(data)
      })

      indexService.getAllItems().success(function (data) {
        console.log(data)
        $scope.contents = data;
      })



    });