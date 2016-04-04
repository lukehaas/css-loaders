module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // clean
    clean: {
      dir: ['./src/css', './dist']
    },
    // less
    less: {
      development: {
        options: {
          sourceMap: true
        },
        files: {
          './src/css/css-loaders.css': './src/less/main.less',
        }
      },
      production: {
        options: {
          compress: true,
          sourceMap: true
        },
        files: {
          './dist/css-loaders.min.css': './src/less/main.less',
        }
      }
    },
    // sass
    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: {
          './src/css/css-loaders.css': './src/sass/main.scss'
        }
      },
      production: {
        options: {
          style: 'compressed'
        },
        files: {
          './dist/css-loaders.min.css': './src/sass/main.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'less']);
  grunt.registerTask('compile:sass', ['clean', 'sass']);
};
