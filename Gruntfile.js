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
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('clean', function () {
        grunt.file.delete('dist');
    });

    grunt.registerTask('build', ['clean', 'browserify', 'copy:index_html']);
    grunt.registerTask('default', 'build');
};