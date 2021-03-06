module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: [
        "Gruntfile.js",
        "appserver/static/heremaps/**/*.js",
        "test/integration/web/**/*.js",
        "bin/**/*.js"
      ],
      options: {
        jshintrc: ".jshintrc"
      }
    },
    inlinelint: {
      html: ["default/data/ui/html/**/*.html"]
    },
    casper : {
      options: {
        test: true,
        includes: "test/integration/web/include.js",
        post: "test/integration/web/post.js",
        pre:"test/integration/web/pre.js",
        parallel : false
      },
      test : {
        src: ['test/integration/web/*_test.js']
      }
    },
    geojsonhint: {
      files: [
        'appserver/static/data/*.geojson',
        'appserver/static/data/countries/*.geojson',
        'appserver/static/data/continents/*.geojson'
      ]
    },
    jsdoc : {
        dist : {
            src: ['appserver/static/heremaps/*.js'],
            options: {
                destination: 'doc'
            }
        }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-lint-inline');
  grunt.loadNpmTasks('grunt-geojsonhint');
  grunt.loadNpmTasks('grunt-casper');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('test', ['jshint','inlinelint','geojsonhint']);
  grunt.registerTask('default', ['test']);
};
