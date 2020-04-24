
module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
         js: {
           src: ['js/src/*.js'],
           dest: 'js/dist/script.main.js'
         },
         css: {
             src: ['styles/extend.scss','styles/variables.scss','styles/reset.scss','styles/style.scss','styles/unslider.css', 'styles/accardion.scss'],
             dest: 'styles/main.scss'
         }
     },

    uglify: {
      dist: {
        src:['js/dist/script.main.js'],
        dest: 'js/dist/script.main.min.js'
      }
    },

    sass: {
      dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['main.scss'],
        dest: 'styles',
        ext: '.css'
      }]
    }
  },

    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['styles/*.scss'],
        tasks: ['concat','sass']
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat','uglify','sass','watch']);

};
