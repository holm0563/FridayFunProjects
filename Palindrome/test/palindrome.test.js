"use strict";

var expect = require('chai').expect;
var sut = require('../app/palindrome');

describe('Palindrome', function() {  

    var test1 = 'car';
    describe('#Palindrome()', function() {
        it(test1+' should return false', function() {
            expect(sut.Palindrome(test1)).to.be.false;
        });
    });

    var test2 = 'racecar';
    describe('#Palindrome()', function() {
        it(test2+' should return true', function() {
            expect(sut.Palindrome(test2)).to.be.true;
        });
    });

     var test3 = 'Rise to vote sir.';
    describe('#Palindrome()', function() {
        it(test3+' should return true', function() {
            expect(sut.Palindrome(test3)).to.be.true;
        });
    });

     var test4 = 'abdaa';
    describe('#Palindrome()', function() {
        it(test4+' should return false', function() {
            expect(sut.Palindrome(test4)).to.be.false;
        });
    });

    var test5 = 'a';
    describe('#Palindrome()', function() {
        it(test5+' should return false', function() {
            expect(sut.Palindrome(test5)).to.be.false;
        });
    });

    var test6 = 'The sentence contains a racecar palindrome.';
    describe('#ContainsPalindrome()', function() {
        it(test6+' should return true', function() {
            expect(sut.ContainsPalindrome(test6)).to.be.true;
        });
    });

    var test7 = 'The sentence does not contain a palindrome.';
    describe('#ContainsPalindrome()', function() {
        it(test7+' should return false', function() {
            expect(sut.ContainsPalindrome(test7)).to.be.false;
        });
    });

    var test8 = null;
    describe('#ContainsPalindrome()', function() {
        it('null should return false', function() {
            expect(sut.ContainsPalindrome(test8)).to.be.false;
        });
    });
});