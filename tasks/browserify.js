'use strict';

module.exports = function browserify(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-browserify');

  // Options
  return {
    build: {
      files: [
        {
          expand: true,
          cwd: 'client/',
          src: '**/*.js',
          dest: 'public/javascripts',
          ext: '.js'
        }
      ]
    }
  };
};
