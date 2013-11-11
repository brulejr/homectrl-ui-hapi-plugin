/**
 * homectrl-ui-hapi-plugin: /public/js/app.js
 * AngularJS application
 * 
 * Copyright (c) 2013 Jon Brule
 * Licensed under the MIT license.
 */
define([
  'angular',
  './controllers/controllers',
  './core/directives',
  './core/events',
  './core/filters',
  './services/services',
  './parts/cssmenu/cssmenu'
], function (ng) {
  'use strict';

  ng.module('app', [ 
    'app.controllers',
    'app.directives',
    'app.events',
    'app.filters',
    'app.services',
    'part.cssmenu',
    'ui.bootstrap'
  ]);

});