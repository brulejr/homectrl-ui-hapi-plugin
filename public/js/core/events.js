/**
 * homectrl-ui-hapi-plugin: /public/js/core/events.js
 * AngularJS application - event catalog
 * 
 * Copyright (c) 2013 Jon Brule
 * Licensed under the MIT license.
 */
define(['angular'], function (ng) {
  'use strict';

  var events = ng.module('app.events', []);

  events.factory('Events', function() {
    return {

      MENU_FILE_NEW: 'MENU:FILE:NEW',
      MENU_FILE_SAVE: 'MENU:FILE:SAVE',
      MENU_FILE_SAVE_ALL: 'MENU:FILE:SAVE_ALL',
      MENU_FILE_QUIT: 'MENU:FILE:SAVE_QUIT',

      MENU_VIEW: 'MENU:VIEW',

      MENU_ABOUT: 'MENU:ABOUT'

    };
  });

});