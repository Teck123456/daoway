angular
  .module('userApp.controllers', [])
  .controller(
    'loginCtrl',
    function ($rootScope, $scope, $location) {
      $rootScope.isShow = false
      $scope.errorMsg = '';
      $scope.user = {};
      $scope.closeMsg = function () {
        $scope.errorMsg = '';
      }
      /*background-color: #41B883;
       color: white;*/

      // 登录
      $scope.login = function (user) {
        console.log(user);
        var listKey = $rootScope.List_Key;
        if (user === undefined) {
          $scope.errorMsg = '用户信息不可为空！';
          // alert('请填写用户信息！');
          return;
        }
        if (user.userName === undefined || user.password === undefined) {
          $scope.errorMsg = '用户名或密码格式错误！';
          return;
        }
        var userName = user.userName.trim();
        var password = user.password.trim();
        var userObj = {};
        userObj.userName = userName;
        userObj.password = password;

        var userList = JSON.parse(localStorage.getItem(listKey) || '[]');
        console.log(userList, 'userList');

        var index = userList.findIndex(function (user) {
          if (user.userName === userObj.userName) {
            console.log(user.password);
          }
          return user.userName === userObj.userName;
        });
        console.log(index);
        if (index === -1) {
          // 说明用户名不存在，需要先注册用户名
          $scope.errorMsg = '该账户不存在，请先注册！';
          return;
        }
        else {
          if (userObj.password === userList[index].password) {
            $scope.errorMsg = '';
            // console.log(userObj.password, userList[index].password);
            var userStr = localStorage.getItem('UserKey') || '';
            if (userStr) {
              localStorage.removeItem('UserKey');
              localStorage.setItem('UserKey', JSON.stringify(userObj));
            }
            else {
              localStorage.setItem('UserKey', JSON.stringify(userObj));
            }
            window.location.href = './main.html';
          }
          else {
            $scope.errorMsg = '密码错误，请确认登录密码！';
            console.log('密码错误，请确认登录密码！');
            return;
          }
        }


      }


    })
  .controller(
    'registCtrl',
    function ($rootScope, $scope) {
      $rootScope.isShow = false
      $scope.errorMsg = '';
      $scope.user = {};
      $scope.closeMsg = function () {
        $scope.errorMsg = '';
      }


      // 注册
      $scope.register = function (user, checkPwd) {

        var listKey = $rootScope.List_Key;

        if (user === undefined) {
          $scope.errorMsg = '用户信息不可为空！';
          // alert('请填写用户信息！');
          return;
        }
        if (user.userName === undefined || user.password === undefined) {
          $scope.errorMsg = '用户名或密码格式错误！';
          return;
        }

        if (user.password !== checkPwd) {
          $scope.errorMsg = '两次密码必须保持一致！';
          return;
        }
        var userObj = user;

        if (userObj.userName.trim() && userObj.password.trim()) {
          var userList = JSON.parse(localStorage.getItem(listKey));
          var index = userList.findIndex(function (user) {
            return user.userName === userObj.userName;
          });
          if (index !== -1) {
            // 说明用户名已经存在，无法重复注册
            $scope.errorMsg = '该用户名已经被注册，请更换后重试！';
            return;
          }
          else {
            userList.push(userObj);
            console.log(userList);
            var userListStr = JSON.stringify(userList);
            localStorage.setItem(listKey, userListStr);
            // console.log(localStorage.getItem(listKey));
            $scope.user.userName = '';
            $scope.user.password = '';
            $scope.checkPwd = '';
            $scope.errorMsg = '';
            alert('注册成功，即将前往登录！');
            window.location.href = './main.html/#login';
          }
        }
        else {
          $scope.errorMsg = '用户名或密码格式不正确！';
          return;
        }
      }
    });