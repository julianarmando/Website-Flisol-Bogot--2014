/**
 * Gulp file tasks.
 */

module.exports = function(grunt) {
  grunt.initConfig({
    // Concatenamos todos los css y js existentes.
    concat: {           
      css: {            
        src: [
          'css/*'
        ],
        dest: 'build/css/app.css'
      },
      js : {
        src : [
          'js/*',          
        ],
        dest : 'build/js/app.js'
      }
    },

    // Comprimir el css
    cssmin : {                                
      css:{
          src: 'build/css/app.css',
          dest: 'build/css/app.min.css'
      }
    },

    // Llamado de los archivos de produccion
    processhtml : {
      dist: {
        files : {
          'build/index.html' : 'index.html'
        }
      }
    },

    // compress de imagenes
    imagemin: {                          // Task
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'img/',
            src: ['**/*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'build/img/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'img/',
            src: ['**/*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: 'build/img/',
            ext: '.jpg'
          }
        ]
      }
    }    

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin'); 
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', [
    'concat:css', // <-- Concatenar css
    'concat:js',  // <-- concaternar js
    'cssmin:css', // <-- mimificar css
    'processhtml',// <-- html de produccion
    'imagemin'    // <-- compresion de imagenes
  ]);
};