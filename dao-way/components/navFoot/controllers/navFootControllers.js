angular
  .module('navFootApp.controllers', [])
  .controller(
    'navFootCtrl',
    function($rootScope, $scope, $location) {
      $rootScope.isShow = true;
      $rootScope.List_Key = 'dataList';
      localStorage.getItem('dataList') || localStorage.setItem('dataList', '[]')
      $scope.user = {};
      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };

      //查询用户信息
      var userStr = localStorage.getItem('UserKey') || '';
      if (userStr) {
        $scope.user = JSON.parse(userStr);
      }
      else {
        return;
      }


      $scope.logOut = function () {
        localStorage.removeItem('UserKey');
        $scope.user = {};
        window.location.reload();
      };

    });