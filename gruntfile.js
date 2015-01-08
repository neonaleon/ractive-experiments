module.exports = function(grunt){
  grunt.initConfig({
    watch: {
      browserify: {
        build: {
          'public/javascripts/bundle.js': ['', '!']
        }
      },
      js: {
        files: ['']
        tasks: ['browserify']
      }
    }
  });

  grunt.registerTask('default', []);
}