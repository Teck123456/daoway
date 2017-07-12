angular
  .module('proDetailApp.controllers', [])
  .controller(
    'proDetailCtrl',
    function($rootScope, $scope) {
      $rootScope.isShow = true

      productService.getItems().success(function (data) {
        console.log(data);
      })

    });