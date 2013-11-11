/**
 * homectrl-ui-hapi-plugin: /Gruntfile.js
 * 
 * Copyright (c) 2013 Jon Brule
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          targetDir: 'public/vendor'
        }
      }
    },
    jslint : {
      server : {
        src : [ 'lib/*.js', 'test/*.js', 'config.js', 'index.js' ],
        directives : {
          node : true,
          passfail : false,
          nomen : true,
          plusplus : true,
          todo : true,
          vars : true,
          white : true,
          predef : [ 'describe', 'it', 'before', 'after' ]
        },
        options : {
          log : 'out/lint.log',
          jslintXml : 'out/jslint.xml',
          errorsOnly : true,
          failOnError : false
        }
      }
    },
    mochacov : {
      coverage : {
        options : {
          reporter : 'html-cov',
          output : "out/coverage.html"
        }
      },
      test : {
        options : {
          reporter : 'spec',
          coverage : true
        }
      },
      options : {
        files : 'test/*.js'
      }
    },
    clean : [ 'out' ]
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-mocha-cov');

  grunt.registerTask('test', [ 'mochacov:test' ]);

  // Default task(s).
  grunt.registerTask('default', [ 'clean', 'jslint', 'test' ]);

};