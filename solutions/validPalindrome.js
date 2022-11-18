var isPalindrome = function (s) {
  const newS = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  const reverseS = newS.split('').reverse().join('');
  if (newS === reverseS) {
    return true;
  } else if (newS !== reverseS) {
    return false;
  }
};

isPalindrome('A man, a plan, a canal: Panama');
