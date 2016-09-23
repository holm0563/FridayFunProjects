exports.Palindrome = function(palindrome){

    var testableString = palindrome.replace(/[^A-Z0-9]/ig, "").toLowerCase(); //removes special characters, spaces, etc.

    var reversed = testableString.split('').reverse().join('');

    return testableString === reversed;
}