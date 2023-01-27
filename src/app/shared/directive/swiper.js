app.directive('ngSwiper', function () {
    return {
        restrict: 'A',
        scope: {
            options: '='
        },
        controller: 'swiperCtrl',
        link: function (scope, element) {
            var swiper = new Swiper(element[0], scope.options);
            scope.$watchCollection('options', function (newVal, oldVal) {
                swiper.update();
            });
        }
    };
});

app.controller('swiperCtrl', function ($scope) {
    $scope.swiperCateSlider = {
        spaceBetween: 15,
        loop: false,
        speed: 1000,
        autoplay: false,
        navigation: {
            nextEl: ".mc_next",
            prevEl: ".mc_prev",
        },
        pagination: {
            el: ".mc_pagi",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    }

    $scope.swiperProductSaleSlider = {
        spaceBetween: 15,
        loop: false,
        speed: 1000,
        autoplay: false,
        navigation: {
            nextEl: ".mf_next",
            prevEl: ".mf_prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                slidesPerColumnFill: "row",
                slidesPerColumn: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    }

    $scope.swiperProductSlider = {
        spaceBetween: 15,
        loop: false,
        speed: 1000,
        autoplay: false,
        navigation: {
            nextEl: ".mf_next",
            prevEl: ".mf_prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                slidesPerColumnFill: "row",
                slidesPerColumn: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    }

    $scope.swiperVideoSlider = {
        spaceBetween: 15,
        loop: false,
        speed: 1000,
        autoplay: false,
        navigation: {
            nextEl: ".mv_next",
            prevEl: ".mv_prev",
        },
        breakpoints: {
            375: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2.3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    }

    $scope.swiperBlogSlider = {
        spaceBetween: 15,
        loop: false,
        speed: 1000,
        autoplay: false,
        navigation: {
            nextEl: ".ml_next",
            prevEl: ".ml_prev",
        },
        breakpoints: {
            375: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2.3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    }

    $scope.swiperBannerCollection = {
        spaceBetween: 10,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.mbc_next',
            prevEl: '.mbc_prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2
            },
            576: {
                slidesPerView: 1.5
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            }
        }
    }
})



