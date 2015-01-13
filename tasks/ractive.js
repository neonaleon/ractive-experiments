'use strict';

var Ractive = require('ractive');
var path = require('path');

module.exports = function ractive(grunt) {

  var desc = 'Compile ractive.js templates';
  grunt.registerMultiTask('ractive', desc, make);

  function make(){
    this.files.forEach(function(file){
      file.src.map(function(filepath){
        // read and parse file
        var template = grunt.file.read(filepath);
        var parsed = Ractive.parse(template, { interpolate: { script: false, style: false } });
        // write file, using commonjs style so that they can be required
        grunt.file.write(file.dest, 'module.exports=' + JSON.stringify(parsed));
      });
    });
  }

  // Options
  return {
    build: {
      files: [
        {
          expand: true,
          cwd: 'templates/',
          src: '**/*.ractive',
          dest: 'parsed',
          ext: '.js'
        }
      ]
    }
  };
};
