angular
  .module('providerApp.controllers', [])
  .controller(
    'providerCtrl',
    function($rootScope, $scope, providerService) {
      $rootScope.isShow = true

      const Number = 4;
      var array = [];
      $scope.providers = [];

      providerService.getProviders().success(function (data) {
        array = data;
        $scope.providers = array;

      })

      $scope.loadMoreProviders = function () {
        providerService.getProviders().success(function (data) {
          array = array.concat(data);
          $scope.providers = array;
          var count = (Number - $scope.providers.length % 4) % 4
          console.log(count)
        });
      }

    });