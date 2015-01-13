'use strict';

module.exports = function clean(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');

  // Options
  return {
    build: [ 'parsed/' ]
  };
};
