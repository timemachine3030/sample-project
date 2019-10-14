const {describe, it} = require('mocha');
const {expect} = require('chai');
const {
    primeFactors
} = require('./src');

describe('Factor Test', () => {
    it('Factors', () => {
        expect(true).to.eql(true);
    });

    describe('Prime Factors', () => {
       describe('primeFactors', () => {
           it('Check 1', () => {
               expect(primeFactors(1)).to.eql([]);
           });
           it('Check 2', () => {
               expect(primeFactors(2)).to.eql([2]);
           });
           it('Check 4', () => {
               expect(primeFactors(4)).to.eql([2, 2]);
           });
		   it('Check 1227', () => {
               expect(primeFactors(1227)).to.eql([3, 409]);
           });
       });
    });
});