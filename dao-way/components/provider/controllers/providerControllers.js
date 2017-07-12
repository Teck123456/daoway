angular
  .module('providerApp.controllers', [])
  .controller(
    'providerCtrl',
    function($rootScope, $scope, productService) {
      $rootScope.isShow = true

      productService.getItems().success(function (data) {
        console.log(data);
        $scope.providers = data
      })

    });