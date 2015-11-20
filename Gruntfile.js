'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        // https://github.com/karlgoldstein/grunt-html2js
        html2js: {
          options: {
              base: 'src/app/',
              module: 'templates',
              singleModule: true,
              fileHeaderString: 'module.exports = '
          },
          app: {
              src: ['src/app/js/**/*.html'],
              dest: 'build/gen/js/templates.js'
          }
        },

        // https://github.com/jmreidy/grunt-browserify#documentation
        browserify: {
            app: {
                src: ['src/app/js/index.js'],
                dest: 'build/dist/js/index.js'
            },
            test: {
                src: ['src/test/js/index.js'],
                dest: 'build/test/js/index.js'
            }
        },

        // https://github.com/gruntjs/grunt-contrib-copy#copy-task
        copy: {
            index_html: {
                expand: true,
                cwd: 'src/app/',
                src: 'index.html',
                dest: 'build/dist/'
            }
        },

        karma: {
           unit: {
               configFile: 'src/test/karma.conf.js'
           }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-html2js');

    grunt.registerTask('clean', function () {
        grunt.file.delete('build');
    });

    grunt.registerTask('build', ['html2js', 'browserify', 'copy:index_html']);
    grunt.registerTask('test', ['build', 'karma']);
    grunt.registerTask('rebuild', ['clean', 'build']);
    grunt.registerTask('default', 'build');
};