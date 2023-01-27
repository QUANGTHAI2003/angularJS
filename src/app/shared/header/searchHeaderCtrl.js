(function () {
    'use strict';
    app.controller('searchHeaderCtrl', ControllerCtrl)
    /** @ngInject */
    function ControllerCtrl($scope, $http, debounce, priceFormatService) {
        $scope.showResults = false;
        $scope.searchTerm = "";
        $scope.hideResults = debounce(function () {
            if (!$scope.searchTerm) {
                $scope.showResults = false;
            }

            $scope.searchTerm = $scope.searchTerm.toLowerCase();

            $http.get("http://localhost:3000/api/products?q=" + $scope.searchTerm).then(function (response) {
                $scope.productSearch = response.data;
                $scope.showResults = true;
                // count result
                $scope.countResult = $scope.productSearch.length;
                $scope.productSearch = $scope.productSearch.slice(0, 5);
                $scope.productSearch.sort(function (a, b) {
                    return b.price - a.price;
                });
                $scope.productSearch.map(function (product) {
                    product.formattedPrice = priceFormatService.formatPrice(product.price);
                    if (product.oldPrice) {
                        product.formattedOldPrice = priceFormatService.formatPrice(product.oldPrice);
                    }
                })
            })

        }, 500);

    }
}());