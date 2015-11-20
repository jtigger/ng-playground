var compile = require('../support/compile');

describe('homeContentDirective', function () {
    var $rootScope;

    beforeEach(angular.mock.module('application'));
    beforeEach(inject(function (_$rootScope_) {
        $rootScope = _$rootScope_;
    }));

    it('says "Hello, world!"', function () {
        var scope = $rootScope.$new();
        var homeContent;

        homeContent = compile('<home-content></home-content>', scope);

        expect(homeContent).toContainText('Hello, world (from a template)!');
    });
});