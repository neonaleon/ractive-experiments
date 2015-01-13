'use strict';

module.exports = function browserify(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-browserify');

  // Options
  return {
    build: {
      files: {
        'public/javascripts/04-components.js': [ 'client/04-components.js' ]
      }
    }
  };
};
