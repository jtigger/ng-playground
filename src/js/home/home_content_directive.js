'use strict';

HomeContentDirective.$inject = [];
function HomeContentDirective() {
    return {
        restrict: 'E',
        templateUrl: 'js/home/home_content_directive.html',
        scope: {}
    }
}

module.exports = HomeContentDirective;
