(function () {
    'use strict';
    app.controller('productDetailCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $http, $routeParams, priceFormatService) {
        $scope.id = $routeParams.id;

        $http.get("http://localhost:3000/api/products/" + $scope.id).then(function (response) {
            $scope.productDetail = response.data;
            $scope.productDetail.formattedPrice = priceFormatService.formatPrice($scope.productDetail.price);
            if ($scope.productDetail.oldPrice) {
                $scope.productDetail.formattedOldPrice = priceFormatService.formatPrice($scope.productDetail.oldPrice);
            }

            renderProductRelate();

            function renderProductRelate() {
            // render product relate except curren product detail and limit 4 product
                $http.get("http://localhost:3000/api/products").then(function (response) {
                    $scope.productRelate = response.data;
                    $scope.productRelate = $scope.productRelate.filter(function (product) {
                        return product.categoryProduct == $scope.productDetail.categoryProduct && product.id != $scope.productDetail.id;
                    });
                    $scope.productRelate = $scope.productRelate.slice(0, 4);
                    $scope.productRelate.map(function (product) {
                        product.formattedPrice = priceFormatService.formatPrice(product.price);
                        if (product.oldPrice) {
                            product.formattedOldPrice = priceFormatService.formatPrice(product.oldPrice);
                        }
                    });
                });
            }
        });
    }
}());