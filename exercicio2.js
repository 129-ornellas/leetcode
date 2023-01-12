// https://leetcode.com/problems/palindrome-number/
var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('') === x.toString()
};

console.log(isPalindrome(10))
console.log(isPalindrome(121))