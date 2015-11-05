angular.module('application')
    .directive('homeContent', HomeContentDirective);

HomeContentDirective.$inject = [];

function HomeContentDirective() {
    return {
        restrict: 'E',
        template: '<div>Hello, world!</div>',
        scope: {}
    }
};
