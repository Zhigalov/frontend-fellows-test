var slugGenerator = require('../src/slugGenerator').translit;
var translate = require('../src/slugGenerator').translate;
var should = require('chai').should;
var expect = require('chai').expect;
var mockery = require('mockery');
var sinon = require('sinon');
var nock = require('nock');

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

    it('should translit russian characters', function () {
        var stub = sinon.stub();
        stub.withArgs('привет').onFirstCall().returns('mu-ha-ha')
        stub.throws(Error('wrong translit argument'));
        mockery.registerMock('translit', function () {
            return stub;
        })
        mockery.enable({
            useCleanCache: true,
            warnOnUnregistered: false
        });
        translit = require('../src/slugGenerator').translit;

        var actual = translit('привет');

        actual.should.be.equal('mu-ha-ha');
        mockery.disable();
    });

    it('should translate russian characters', function (done) {
        nock('https://translate.yandex.net')
            .get('/api/v1.5/tr.json/translate')
            .query(true)
            .reply(200, {text: ['mu-ha-ha']});

        translate('привет')
            .then(function (actual) {
                actual.should.be.equal('mu-ha-ha');
            })
            .then(done, done);
    });

    it('should fail', function() {
        true.should.be.false;
    });
});
