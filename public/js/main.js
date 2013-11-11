/**
 * homectrl-ui-hapi-plugin: /public/js/main.js
 * AngularJS / RequireJS main entry point
 * 
 * Copyright (c) 2013 Jon Brule
 * Licensed under the MIT license.
 */
require.config({
  
  // alias libraries paths
  paths: {
    'angular': '../vendor/angular/angular',
    'domReady': '../vendor/requirejs-domready/domReady',
    'text': '../vendor/requirejs-text/text',
    'ui-bootstrap': '../vendor/angular-bootstrap/ui-bootstrap'
  },
  
  // angular does not support AMD out of the box, put it in a shim
  shim: {
    'angular': {
      exports: 'angular'
    },
    'ui-bootstrap': {
      exports: 'ui-bootstrap'
    }
  }
  
});

define([ 'require', 'angular', 'app' ], function (require, ng) {
  'use strict';

  require(['domReady!'], function (document) {
    ng.bootstrap(document, [ 'app' ]);
  });

});
