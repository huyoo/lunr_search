'use strict';

/* Controllers */

var galleryApp = angular.module('docindexApp', ['ngAnimate']);

galleryApp.controller('DocIndexListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('docindex.json').success(function(data) {
      $scope.galleryitems = data;
    });

    $scope.orderProp = 'appID';

    $scope.isEmpty = function(items) {
      return angular.isArray(items) && items.length === 0;
    };

}]);
