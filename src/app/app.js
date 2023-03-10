// config route
const app = angular.module('mewYummy', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./app/components/home/home.view.html",
            controller: "homeCtrl"
        })
        .when("/about", {
            templateUrl: "app/components/about/about.view.html",
            // controller: "aboutCtrl"
        })
        .when("/products", {
            templateUrl: "./app/components/products/products.view.html",
            controller: "productCtrl"
        })
        .when("/products/:id", {
            templateUrl: "./app/components/products/product-detail.view.html",
            controller: "productDetailCtrl"
        })
        .when("/news", {
            templateUrl: "./app/components/news/news.view.html",
            // controller: "newsCtrl"
        })
        .when("/contact", {
            templateUrl: "./app/components/contact/contact.view.html",
            // controller: "contactCtrl"
        })
        .when("/cart", {
            templateUrl: "./app/components/cart/cart.view.html",
            // controller: "cartCtrl"
        })
        .when("/login", {
            templateUrl: "./app/components/login/login.view.html",
            controller: "loginCtrl"
        })
        .when("/register", {
            templateUrl: "./app/components/login/register.view.html",
            controller: "registerCtrl"
        })
        .when("/account", {
            templateUrl: "./app/components/account/account.view.html",
            // controller: "accountCtrl"
        })
        .when("/account/order", {
            templateUrl: "./app/components/account/order/order.view.html",
            // controller: "orderCtrl"
        })
        .when("/account/order/:id", {
            templateUrl: "./app/components/account/order-detail/order-detail.view.html",
            // controller: "orderDetailCtrl"
        })
        .when("/account/updateInfo", {
            templateUrl: "./app/components/account/update-info.view.html",
            // controller: "updateInfoCtrl"
        })
        .when("/account/updatePassword", {
            templateUrl: "./app/components/account/update-password.view.html",
            // controller: "updatePasswordCtrl"
        })
        .otherwise({
            redirectTo: '/'
        });
})

// change title base on url in website
app.run(function ($rootScope, $location, $route) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        // get last parem in url
        let url = $location.path().split('/').pop();
        // change title base on url
        switch (url) {
            case 'about':
                $rootScope.title = 'Gi???i thi???u';
                break;
            case 'products':
                $rootScope.title = 'S???n ph???m';
                break;
            case 'news':
                $rootScope.title = 'Tin t???c';
                break;
            case 'contact':
                $rootScope.title = 'Li??n h???';
                break;
            case 'cart':
                $rootScope.title = 'Gi??? h??ng';
                break;
            case 'login':
                $rootScope.title = '????ng nh???p';
                break;
            case 'register':
                $rootScope.title = '????ng k??';
                break;
            case 'account':
                $rootScope.title = 'T??i kho???n';
                break;
            case 'order':
                $rootScope.title = '????n h??ng';
                break;
            case 'updateInfo':
                $rootScope.title = 'C???p nh???t th??ng tin';
                break;
            case 'updatePassword':
                $rootScope.title = 'C???p nh???t m???t kh???u';
                break;
            default:
                $rootScope.title = 'Mew Yummy';
                break;
        }
        // change title
        document.title = $rootScope.title;
    });
});
// Path: src\app\components\products\productCtrl.js