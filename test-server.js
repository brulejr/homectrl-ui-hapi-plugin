 /**
  * homectrl-ui-plugin: /test-server.js
  * Hapi composer container for testing this plugin.
  * 
  * Copyright (c) 2013 Jon Brule
  * Licensed under the MIT license.
  */

'use strict';

// module dependencies
var Hapi = require('hapi');
var pkginfo = require('pkginfo')(module, 'name', 'version');

// configure server
var composer = new Hapi.Composer({
	pack : {},
	servers : [ {
		port : process.env.PORT || 3000
	} ],
	plugins : {
		'../../..' : {}
	}	
});

// start the servers
composer.compose(function (err) {
    if (err) {
        console.log('Failed composing');
    } else {
	    var appname = module.exports.name;
		var version = module.exports.version;
		composer.start(function() {
			console.log('Starting %s v%s', appname, version);
		});
    }
});

