/*
 * homectrl-ui-hapi-plugin: /public/js/parts/cssmenu.js
 * AngularJS directive: CSS-based menu
 *
 * Copyright (c) 2013 Jon Brule
 * Licensed under the MIT license.
 */
 define(['angular', 'text!parts/cssmenu/cssmenu.html'], function (ng, template) {
  'use strict';

  var module = ng.module('part.cssmenu', []);

  module.directive('cssmenu', function() {
    return {
      restrict: 'E',
      template: template,
      link: function($scope, $element, $attrs) {
        $scope.onEvent = function(event) {
          $scope.$broadcast(event);
        };
      }
    }
  });

});