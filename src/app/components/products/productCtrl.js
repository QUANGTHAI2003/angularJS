(function(){
    'use strict';
    app.controller('productCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $http, priceFormatService) {
        renderProduct();
        renderCategories();

        function renderProduct() {
            $http.get("http://localhost:3000/api/products").then(function (response) {
                $scope.products = response.data;
                $scope.products.map(function (product) {
                    product.formattedPrice = priceFormatService.formatPrice(product.price);
                    if (product.oldPrice) {
                        product.formattedOldPrice = priceFormatService.formatPrice(product.oldPrice);
                    }
                })
            })
        }

        function renderCategories() {
            $http.get("http://localhost:3000/api/categories").then(function (response) {
                $scope.categories = response.data;
            })
        }
    }

}());