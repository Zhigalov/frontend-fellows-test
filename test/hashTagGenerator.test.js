var hasTagGenerator = require('../src/hashTagGenerator');
require('chai').should();

describe.only('Hash tag generator', function () {
    it('should start with #', function () {
        var actual = hasTagGenerator('wow');

        actual.charAt(0).should.be.equal('#')
    });

    it('should concat words', function () {
        var actual = hasTagGenerator('Привет Dump 2016');

        actual.should.be.equal('#ПриветDump2016');
    });

    it('should normalize words', function () {
        var actual = hasTagGenerator('hello DUMP');

        actual.should.be.equal('#HelloDump');
    });

    it('should clean extra symbols', function () {
        var actual = hasTagGenerator('#@%my-ha-ha!');

        actual.should.be.equal('#MyHaHa');
    });

    it('should failed', function () {
        var actual = { first: 'egg' };

        actual.should.deep.equal({ first: 'chicken' });
    });
});
