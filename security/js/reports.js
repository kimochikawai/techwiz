var app = angular.module('myApp', []);
app.controller('myController',
    function ($scope, $http) {

        var request = {
            method: 'get',
            url: 'https://api.myjson.com/bins/72zoe',
            dataType: 'json',
            contentType: "application/json"
        };



        $scope.arrReports= new Array;

        $http(request)
            .success(function (jsonData) {
                $scope.arrReports = jsonData;
                $scope.list = $scope.arrReports;
            })
            .error(function () {

            });
    });