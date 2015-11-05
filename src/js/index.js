'use strict';

require('angular');

var application = angular.module('application', [
    require('./home').name,
    require('../../gen/js/templates').name
]);

