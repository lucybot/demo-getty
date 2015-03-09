'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  //require('load-grunt-tasks')(grunt);
  grunt.task.loadNpmTasks('grunt-jsonlint');
  console.log('loaded');

  // Project configuration.
  grunt.initConfig({
     jsonlint: {
       sample: {
         src: [ 'recipes/image-search.json' ]
       }
     },
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jsonlint']);
};
