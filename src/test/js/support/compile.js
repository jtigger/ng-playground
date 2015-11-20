'use strict';

var $ = require('jquery');

module.exports = function (template, scope) {
    var $compile;
    var compiledTemplate;

    inject(function (_$compile_) {
        $compile = _$compile_;
    });

    $('#test-context').remove();
    $('body').append($('<div id="test-context"></div>'));
    compiledTemplate = $compile(template)(scope);
    $('#test-context').append(compiledTemplate);
    scope.$apply();
    return compiledTemplate;
};

