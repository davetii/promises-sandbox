const sq = require('../sqroot');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('test-square-root', function() {
    it('square root to be fulfilled', function() {
        // this.timeout(6000); use this to solve timeout problems
        return expect(sq.sq(2)).to.be.fulfilled;
    });

    it('square root of 2 is 4', function() {
        return expect(sq.sq(2)).to.eventually.be.equal(4);
    });

    it('square root should fail when not given a number', function() {
        return expect(sq.sq('w')).to.be.rejected;
    });
});

describe('test-square-root-with-done-callback', function() {
    it('square root to be fulfilled', function(done) {
        expect(sq.sq(2)).to.be.fulfilled.notify(done);
    });

    it('square root of 2 is 4', function(done) {
        expect(sq.sq(2)).to.eventually.be.equal(4).notify(done);
    });

    it('square root should fail when not given a number', function(done) {
        expect(sq.sq('w')).to.be.rejected.notify(done);
    });
});