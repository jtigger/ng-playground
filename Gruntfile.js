'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        // https://github.com/karlgoldstein/grunt-html2js
        html2js: {
          options: {
              base: 'src/',
              module: 'templates',
              singleModule: true,
              fileHeaderString: 'module.exports = '
          },
          main: {
              src: ['src/js/**/*.html'],
              dest: 'gen/js/templates.js'
          }
        },

        // https://github.com/jmreidy/grunt-browserify#documentation
        browserify: {
            app: {
                src: ['src/js/index.js'],
                dest: 'dist/js/index.js'
            }
        },

        // https://github.com/gruntjs/grunt-contrib-copy#copy-task
        copy: {
            index_html: {
                expand: true,
                cwd: 'src/',
                src: 'index.html',
                dest: 'dist/'
            }
        },

        karma: {
           unit: {
               configFile: 'test/karma.conf.js'
           }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-html2js');

    grunt.registerTask('clean', function () {
        grunt.file.delete('dist');
        grunt.file.delete('gen');
    });

    grunt.registerTask('build', ['clean', 'html2js', 'browserify', 'copy:index_html']);
    grunt.registerTask('test', ['build', 'karma']);
    grunt.registerTask('default', 'build');
};