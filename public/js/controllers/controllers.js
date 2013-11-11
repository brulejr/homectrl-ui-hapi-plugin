/**
 * homectrl-ui-hapi-plugin: /public/js/controllers/controller.js
 * AngularJS controllers
 * 
 * Copyright (c) 2013 Jon Brule
 * Licensed under the MIT license.
 */
define([ 'angular', 'ui-bootstrap' ], function (ng) {
  'use strict';

  var controllers = ng.module('app.controllers', [ 'ui.bootstrap' ]);

  controllers.controller('PageCtrl', function($scope, Events) {

    $scope.items = {
      left: [
        { name: 'File', items: [
          { name: 'New', event: Events.MENU_FILE_NEW },
          { name: 'Save', event: Events.MENU_FILE_SAVE },
          { name: 'Save All', event: Events.MENU_FILE_SAVE_ALL },
          { type: 'SEPARATOR' },
          { name: 'Quit', event: Events.MENU_FILE_QUIT }
        ]},
        { name: 'View', event: Events.MENU_VIEW }
      ],
      right: [
        { name: 'About', event: Events.MENU_ABOUT }
      ]
    };

    $scope.$on(Events.MENU_FILE_NEW, function(event) {
      console.log(event);
    });
    $scope.$on(Events.MENU_FILE_SAVE, function(event) {
      console.log(event);
    });
    $scope.$on(Events.MENU_FILE_SAVE_ALL, function(event) {
      console.log(event);
    });
    $scope.$on(Events.MENU_FILE_QUIT, function(event) {
      console.log(event);
    });

    $scope.$on(Events.MENU_VIEW, function(event) {
      console.log(event);
    });

    $scope.$on(Events.MENU_ABOUT, function(event) {
      console.log(event);
    });
  
  });

});