angular
  .module(
    'mainApp',
    ['homeApp', 'userApp', 'navFootApp', 'providerApp',
      'productApp', 'proDetailApp', 'ngRoute'])
  .filter('trustHtml', function ($sce) {
    return function (input) {
      return $sce.trustAsHtml(input);
    }
  })
  .constant('BaseData', {
    dubaoRecordStatus: [{
      code: 'All',
      name: '全部',
      value: 0,
      clazz: 'i-item-active'
    }, {
      code: 'Ongoing',
      name: '正在进行',
      value: 2,
      clazz: ''
    }, {
      code: 'Revealed',
      name: '已揭晓 ',
      value: 1,
      clazz: ''
    }],
    payCodes: [{
      payName: '支付宝支付',
      payCode: 'alipay',
      payClass: 'w-pay-selected',
      imgSrc: 'app/lib/img/alipay.png',
    }]
  })
  .config(
    [
      '$httpProvider',
      '$routeProvider',
      function ($httpProvider, $routeProvider) {
        $routeProvider
          .when(
            '/index',
            {
              templateUrl: './components/home/partials/index.html',
              controller: 'indexCtrl',
              navBar: {
                index: 'selected'
              }
            })
          .when(
            '/login',
            {
              templateUrl: './components/user/partials/login.html',
              controller: 'loginCtrl',
            })
          .when(
            '/register',
            {
              templateUrl: './components/user/partials/register.html',
              controller: 'registCtrl',
            })
          .when(
            '/provider',
            {
              templateUrl: './components/provider/partials/provider.html',
              controller: 'providerCtrl',
            })
          .when(
            '/product',
            {
              templateUrl: './components/product/partials/product.html',
              controller: 'productCtrl',
            })
          .when(
            '/proDetail',
            {
              templateUrl: './components/productDetail/partials/productDetail.html',
              controller: 'proDetailCtrl',
            }).otherwise({
          redirectTo: '/index'
        });

      }]);
