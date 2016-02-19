var slugGenerator = require('../src/slugGenerator');
var should = require('chai').should;
var expect = require('chai').expect;

describe('Slug generator', function () {
    should();

    it('should cast to lower case', function () {
        var actual = slugGenerator('HellO');

        actual.should.be.equal('hello');
    });

    it('should relace spaces to `-`', function () {
        var actual = slugGenerator('hello frontend fellows');

        actual.should.be.equal('hello-frontend-fellows');
    });

    it('should return `undefined` when input data not a string', function () {
        var actual = slugGenerator(42);

        expect(actual).to.be.undefined;
    });

    it('should exclude unknown symbols', function () {
        var actual = slugGenerator('Hello, frontend fellows!');

        actual.should.be.equal('hello-frontend-fellows');
    });

    it('should exclude extra spaces', function () {
        var actual = slugGenerator('   hello   frontend   fellows   ');

        actual.should.be.equal('hello-frontend-fellows');
    });
});
