var isPalindrome = function(x) {
    // let string = x.toString()
    // let invertida = x.split('').reverse().join('');
    return x.toString().split('').reverse().join('') === x.toString()
};

console.log(isPalindrome(10))
console.log(isPalindrome(121))