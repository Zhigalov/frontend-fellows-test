require('chai').should();
var expect = require('chai').expect;
var generateNoteId = require('../src/generateNoteId');

describe('Generate note id', function () {
    it('should cut first line', function () {
        var actual = generateNoteId('first\nsecond');
        actual.should.be.equal('first');
    });

    it('should cast to lower case', function () {
        var actual = generateNoteId('ToDo');
        actual.should.be.equal('todo');
    });

    it('should replace space to `-`', function () {
        var actual = generateNoteId('todo list');
        actual.should.be.equal('todo-list');
    });

    it('should trim string ', function () {
        var actual = generateNoteId('   todo   ');
        actual.should.be.equal('todo');
    });

    it('should exclude extra spaces ', function () {
        var actual = generateNoteId('todo       list');
        actual.should.be.equal('todo-list');
    });

    it('should return undefined when input data not a string', function () {
        var actual = generateNoteId(1);
        expect(actual).to.be.undefined;
    });
});
