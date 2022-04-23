app.controller('MainCtrl', function ($scope, $rootScope) {

    $rootScope.pages = 'pages/getStarted.html'

    $scope.setPages = function (GetPage) {
        $rootScope.pages = GetPage;
    }
});