'use strict';

require('angular');

var application = angular.module('application', [
    require('./home').name,
    require('../../../build/gen/js/templates').name
]);

