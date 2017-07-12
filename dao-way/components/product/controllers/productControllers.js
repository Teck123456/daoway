angular
  .module('productApp.controllers', [])
  .controller(
    'productCtrl',
    function($rootScope, $scope, productService) {
      $rootScope.isShow = true

      productService.getItems().success(function (data) {
        console.log(data);
      })
    });