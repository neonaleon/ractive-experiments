'use strict';

module.exports = function watch(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');

  // Options
  return {
    options: {
      livereload: true
    },
    templates: {
      files: ['templates/**/*'],
      tasks: ['build']
    },
    js: {
      files: ['client/**/*'],
      tasks: ['build']
    }
  };
};
