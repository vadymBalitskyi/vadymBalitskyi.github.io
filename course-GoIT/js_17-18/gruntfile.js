module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      }
    },

    concat: {
      options: {
      },
      dist: {
        src: ['css/src/*.css'],
        dest: 'css/dist/style.main.css'
      }
    },

    uglify: {
      dist: {
        src:['js/dist/script.main.js'],
        dest: 'js/dist/script.main.min.js'
      }
    },

    cssmin: {
	  target: {
	    files: {
	      'css/dist/style.min.css': ['css/src/*.css']
	    }
	  }
	}

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat','uglify','cssmin']);

};
