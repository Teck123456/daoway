angular
  .module('productApp.controllers', [])
  .controller(
    'productCtrl',
    function ($rootScope, $scope, productService, $routeParams, $location) {
      $rootScope.isShow = true;

      var serviceItems = [];
      $scope.serviceItems = [];

      var provId = $routeParams.id;
      productService.getService().success(function (data) {
        var providers = data;
        $scope.provider = providers.find(function (provider) {
          return provider.provId == provId;
        });
        $scope.serviceItems = serviceItems = $scope.provider.serviceItems;

      })

      //点击加载更多
      $scope.loadMore = function () {

        productService.getService().success(function (data) {
          var providers = data;
          var provider = providers.find(function (provider) {
            return provider.provId == provId;
          });
          serviceItems = serviceItems.concat(provider.serviceItems);
          $scope.serviceItems = serviceItems;
        })
      }

      // 点击锚点滚动页面到指定位置
      $scope.gotoAnchor = function(x) {
        var newHash = x;
        if ($location.hash() !== newHash) {
          // set the $location.hash to `newHash` and
          // $anchorScroll will automatically scroll to it
          $location.hash(x);
        } else {
          // call $anchorScroll() explicitly,
          // since $location.hash hasn't changed
          // $anchorScroll();
        }
      };
    });