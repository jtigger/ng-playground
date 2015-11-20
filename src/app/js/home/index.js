'use strict';

module.exports =
    angular.module('home', [])
        .directive('homeContent', require('./home_content_directive'));

