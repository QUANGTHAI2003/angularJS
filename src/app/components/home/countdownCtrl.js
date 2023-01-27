app.controller('CountdownController', ['$scope', '$interval', function ($scope, $interval) {
    const countDownDate = new Date("Jan 30, 2023 10:30:00").getTime();
    $scope.day = null;
    $scope.hour = null;
    $scope.minute = null;
    $scope.second = null;
    $scope.hideSales = null;

    function formatTime(time) {
        return time < 10 ? `0${time}` : `${time}`;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $scope.day = formatTime(days);
        $scope.hour = formatTime(hours) + "h";
        $scope.minute = formatTime(minutes) + "m";
        $scope.second = formatTime(seconds) + "s";

        if (distance <= 0) {
            $scope.day = 0;
            $scope.hour = 0;
            $scope.minute = 0;
            $scope.second = 0;
            $interval.cancel(countdown);
            $scope.hideSales = true;
        }
    }

    const countdown = $interval(updateCountdown, 1000);

    $scope.$on('$destroy', function () {
        $interval.cancel(countdown);
    });
}]);
