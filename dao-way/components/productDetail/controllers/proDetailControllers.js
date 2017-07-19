angular
  .module('proDetailApp.controllers', [])
  .controller(
    'proDetailCtrl',
    function($rootScope, $scope, productService, $routeParams) {
      $rootScope.isShow = true

      var provId = $routeParams.provId;
      var serviceId = $routeParams.serviceId;
      console.log()

      productService.getService().success(function (data) {
        var providers = data;
        var provider = providers.find(function (provider) {
          return provider.provId == provId;
        })
        $scope.provider = provider;
        console.log(provider)
        var serviceItems = provider.serviceItems;
        var item = serviceItems.find(function (item) {
          return item.serviceId == serviceId;
        })
        $scope.item = item;
        console.log(item)
      })

    });