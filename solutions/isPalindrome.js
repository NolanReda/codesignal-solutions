var isPalindrome = function (x) {
  if (x.toString() === x.toString().split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
