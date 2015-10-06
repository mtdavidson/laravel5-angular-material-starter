(function () {
    "use strict";

    angular.module('app.controllers').controller('DataTableCtrl', ['$http', '$q', '$timeout', '$scope', function ($http, $q, $timeout, $scope) {

        $scope.selected = [];

        $scope.query = {
            order: 'name',
            limit: 5,
            page: 1
        };

        $scope.columns = [{
            name: 'Dessert',
            orderBy: 'name',
            unit: '100g serving'
        }, {
            descendFirst: true,
            name: 'Type',
            orderBy: 'type'
        }, {
            name: 'Calories',
            numeric: true,
            orderBy: 'calories.value'
        }, {
            name: 'Fat',
            numeric: true,
            orderBy: 'fat.value',
            unit: 'g'
        }, {
            name: 'Carbs',
            numeric: true,
            orderBy: 'carbs.value',
            unit: 'g'
        }, {
            name: 'Protein',
            numeric: true,
            orderBy: 'protein.value',
            trim: true,
            unit: 'g'
        }, {
            name: 'Sodium',
            numeric: true,
            orderBy: 'sodium.value',
            unit: 'mg'
        }, {
            name: 'Calcium',
            numeric: true,
            orderBy: 'calcium.value',
            unit: '%'
        }, {
            name: 'Iron',
            numeric: true,
            orderBy: 'iron.value',
            unit: '%'
        }];

        $http.get('desserts.js').then(function (desserts) {
            $scope.desserts = desserts.data;
        });

        $scope.getTypes = function () {
            return ['Candy', 'Ice cream', 'Other', 'Pastry'];
        };

        $scope.onpagechange = function (page, limit) {

            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve();
            }, 2000);

            return deferred.promise;
        };

        $scope.loadStuff = function () {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.reject();
            }, 2000);

            $scope.deferred = deferred.promise;
        };

        $scope.onorderchange = function (order) {

            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve();
            }, 2000);

            return deferred.promise;
        };

    }]);

})();
