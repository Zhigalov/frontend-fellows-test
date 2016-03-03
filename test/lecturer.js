var sinon = require('sinon');
require('chai').should();

describe('Пора на лекцию', function () {
    var emitter;
    var daria;
    var spy;

    beforeEach(function () {
        daria = { emitCount: 0 };
        emitter = require('../src/emitter')();
        spy = sinon.spy();
    });

    describe('метод `on`', function () {

        it('должен вызывать обработчик при подписке на `slide` и эмите `slide`', function () {
            emitter.on('slide', daria, spy);
            emitter.emit('slide', 'send data');

            spy.calledOnce.should.be.true;

            var firstCall = spy.getCall(0);

            firstCall.args.length.should.equal(1);
            firstCall.calledWith('send data').should.be.true;
        });

        it('не должен вызывать обработчик при подписке на `slide` и эмите `funny`', function () {
            emitter.on('slide', daria, spy);
            emitter.emit('funny');

            spy.called.should.be.false;
        });

        it('должен вызвать обработчик дважды, ' +
            'если подписать на `slide` и заэмитить `slide` дважды', function () {
            emitter.on('slide', daria, spy);
            emitter.emit('slide');
            emitter.emit('slide');

            spy.callCount.should.equal(2);
        });
    });
});
