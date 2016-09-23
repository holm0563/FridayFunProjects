
(function(exports) {
    "use strict";

    var Palindrome = function(palindrome){

        var testableString = palindrome.replace(/[^A-Z0-9]/ig, "").toLowerCase(); //removes special characters, spaces, etc.

        if (!palindrome || palindrome.length <= 1)
        {
            return false;
        }

        var reversed = testableString.split('').reverse().join('');

        return testableString === reversed;
    }

    var ContainsPalindrome = function(palindrome){

        if (!palindrome || palindrome.length <= 1)
        {
            return false;
        }

        var splitString = palindrome.split(' '); //removes special characters, spaces, etc.
        var lp;

        for(lp = 0; lp<splitString.length; lp++){

            if (exports.Palindrome(splitString[lp])){
                return true;
            }
        }

        return false;
    }

    if (!exports){
        exports = {};
    }

    exports.Palindrome = Palindrome;
    exports.ContainsPalindrome = ContainsPalindrome;

    window.exports = exports;

})(this);