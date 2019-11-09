const sq = require('../sqroot');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('test-square-ropot', function() {
    it('square root of 2 is 4', function() {
        return expect(sq.sq(2)).to.eventually.be.equal(4);
    });
})