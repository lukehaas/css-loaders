module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
          files: [{
              expand: true,
              cwd: 'jade/',
              src: ['**/*.jade'],
              dest: '',
              ext: '.html'
          }]
      }
    },
    less: {
      src: {
        expand: true,
        cwd: 'less/',
        src: ['**/*.less'],
        dest: 'css/',
        ext: '.css'
      }
    },
    watch: {
      files: ['less/**/*.less','jade/**/*.jade'],
      tasks: ['default']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less','jade','watch']);

};