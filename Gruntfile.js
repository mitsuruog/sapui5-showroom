// Generated on 2014-02-01 using generator-sapui5 0.0.1
'use strict';

var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({
  port: LIVERELOAD_PORT
});
var mountFolder = function(connect, dir) {
  return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    coffee: 'coffee'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    yeoman: yeomanConfig,
    watch: {
      options: {
        nospawn: true,
        livereload: true
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= yeoman.app %>/**/*.html',
          '<%= yeoman.app %>/css/**/*.css',
          '<%= yeoman.app %>/**/*.js'
        ]
      },
      coffee: {
        files: [
          '<%= yeoman.coffee %>/**/*.coffee'
        ],
        tasks: ['coffee']
      }
    },

    connect: {
      options: {
        port: SERVER_PORT,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              lrSnippet,
              mountFolder(connect, yeomanConfig.app)
            ];
          }
        }
      }
    },

    open: {
      server: {
        path: 'http://localhost:' + SERVER_PORT
      }
    },

    coffee: {
      compile: {
        expand: true,
        flatten: false,
        cwd: 'coffee/',
        src: ['**/*.coffee'],
        dest: 'app/',
        ext: function(ext) {
          return ext.replace(/coffee$/, 'js');
        }
      }
    },

    'gh-pages': {
      options: {
        base: 'app',
        clone: 'temp/sapui5-showroom'
      },
      src: ['**']
    }

  });

  grunt.registerTask('server', function(target) {

    grunt.task.run([
      'connect:livereload',
      'open:server',
      'watch'
    ]);
  });

  grunt.registerTask('deploy', ['gh-pages']);

  grunt.registerTask('default', [
    'server'
  ]);

};