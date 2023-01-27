(function () {
    'use strict';
    app.controller('homeCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $http, priceFormatService) {
        renderProductDiscount();

        function renderProductDiscount() {
            $http.get("http://localhost:3000/api/products").then(function (response) {
                $scope.productSale = response.data;
                // if product have discount render
                $scope.productSale = $scope.productSale.filter(function (product) {
                    return product.discount > 0;
                })
                $scope.productSale.map(function (product) {
                    product.formattedPrice = priceFormatService.formatPrice(product.price);
                    if (product.oldPrice) {
                        product.formattedOldPrice = priceFormatService.formatPrice(product.oldPrice);
                    }
                });
            })
        }

        // render product meat
        renderProductMeat();

        function renderProductMeat() {
            $http.get("http://localhost:3000/api/products").then(function (response) {
                $scope.productMeat = response.data;
                // if product have discount render
                $scope.productMeat = $scope.productMeat.filter(function (product) {
                    return product.categoryProduct == 1;
                });

                $scope.productMeat.map(function (product) {
                    product.formattedPrice = priceFormatService.formatPrice(product.price);
                    if (product.oldPrice) {
                        product.formattedOldPrice = priceFormatService.formatPrice(product.oldPrice);
                    }
                });
            })
        }

        // render product seafood
        renderProductSeafood();

        function renderProductSeafood() {
            $http.get("http://localhost:3000/api/products").then(function (response) {
                $scope.productSeafood = response.data;
                // if product have discount render
                $scope.productSeafood = $scope.productSeafood.filter(function (product) {
                    return product.categoryProduct == 2;
                });
                $scope.productSeafood.map(function(product) {
                    product.formattedPrice = priceFormatService.formatPrice(product.price);
                    if (product.oldPrice) {
                        product.formattedOldPrice = priceFormatService.formatPrice(product.oldPrice);
                    }
                });
            })
        }

        // render product vegetable
        renderProductVegetable();

        function renderProductVegetable() {
            $http.get("http://localhost:3000/api/products").then(function (response) {
                $scope.productVegetable = response.data;
                // if product have discount render
                $scope.productVegetable = $scope.productVegetable.filter(function (product) {
                    return product.categoryProduct == 3;
                });
                $scope.productVegetable.map(function(product) {
                    product.formattedPrice = priceFormatService.formatPrice(product.price);
                    if (product.oldPrice) {
                        product.formattedOldPrice = priceFormatService.formatPrice(product.oldPrice);
                    }
                });
            })
        }
    }

}());