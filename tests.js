const {describe, it} = require('mocha');
const {expect} = require('chai');
const {
    findUniqueNumbers, isPalindrome, sortArray
} = require('./src');

describe('Practice Test', () => {
    it('example', () => {
        expect(true).to.eql(true);
    });

    describe('Sorting numbers', () => {
        const numbers = [3, 4, 5, 6, 9, 10, 3, 4, 2, 9, 4, 3, 9, 3];
        describe('findUniqueNumbers', () => {
            it('finds the list of unique numbers', () => {
                expect(
                    findUniqueNumbers(numbers)
                ).to.eql([3, 4, 5, 6, 9, 10, 2]);
            });
        });
        describe('sortArray', () => {
           it('sorts the array into a unique list', () => {
               expect(
                   sortArray(numbers)
               ).to.eql([2, 3, 4, 5, 6, 9, 10]);
           });
        });
    });

    describe('Palindromes', () => {
       describe('isPalindrome', () => {
           it ('expect false for non-matches', () => {
               expect(isPalindrome('palindrome is not one')).to.eql(false);
           });
           it('finds simple example', () => {
               expect(isPalindrome('level')).to.eql(true);
           });
           it('removes spaces', () => {
               expect(isPalindrome('never odd or even')).to.eql(true);
           });
           it('ignores case and punctuation', () => {
               expect(isPalindrome('A man, a plan, a canal – Panama')).to.eql(true);
           });
       });
    });
});
