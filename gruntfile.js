module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['build/CSS/prod.css','build/JS/prod.js'],
    jshint: {
      files: {
        src: ['JS/**/*.js']
      },
    },
    mkdir: {
      all: {
        options: {
          create: ['build/JS/', 'build/CSS/']
        },
      },
    },
    concat: {
      options: {
        separator: ' ',
      },
      dist: {
        src: ['node_modules/mo-js/*/*.min.js','node_modules/mo-js/*/*.min.js', 'JS/mo-test.js'],
        dest: 'build/JS/prod.js'
      }
    },
    concat_css: {
      options: {},
      all: {
        src: ["CSS/*.css"],
        dest: "build/CSS/prod.css"
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/CSS',
          src: ['*.css', '!*.min.css'],
          dest: 'build/CSS',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      options: {},
      build: {
        src: 'build/JS/prod.js',
        dest: 'build/JS/prod.min.js'
      }
    },
  });
  grunt.registerTask('default', ['mkdir', 'jshint', 'concat', 'concat_css', 'cssmin', 'uglify','clean']);
};
