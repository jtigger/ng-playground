'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        // https://github.com/jmreidy/grunt-browserify#documentation
        browserify: {
            app: {
                src: 'src/js/index.js',
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

    grunt.registerTask('clean', function () {
        grunt.file.delete('dist');
    });

    grunt.registerTask('build', ['clean', 'browserify', 'copy:index_html']);
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('default', 'build');
};