'use strict';

module.exports = function (config) {
    // https://karma-runner.github.io/0.13/config/configuration-file.html
    config.set({
        basePath: '../',
        files: ['build/test/js/index.js'],
        frameworks: ['jasmine-jquery', 'jasmine'],
        browsers: ['PhantomJS'],
        singleRun: true
    });
};