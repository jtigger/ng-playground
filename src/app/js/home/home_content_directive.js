'use strict';

HomeContentDirective.$inject = [];
function HomeContentDirective() {
    return {
        restrict: 'E',
        templateUrl: 'js/home/home_content_directive.html',
        scope: {},
        controller: function() {
            console.log("started controller.");
        }
    }
}

module.exports = HomeContentDirective;
