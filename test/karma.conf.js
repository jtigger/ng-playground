'use strict';

module.exports = function (config) {
    // https://karma-runner.github.io/0.13/config/configuration-file.html
    config.set({
        basePath: '../',
        frameworks: ['browserify', 'jasmine-jquery', 'jasmine'],
        preprocessors: {
            'test/js/index.js': 'browserify'
        },
        files: ['test/js/index.js'],
        browsers: [
            'PhantomJS',
            //'Chrome'
        ],
        singleRun: true
    });
};