var isValid = function (s) {
  const arr = [];
  for (let i = 0; i < s.length; i += 1) {
    const end = arr[arr.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      arr.push(s[i]);
    } else if (s[i] === ')' && end === '(' && arr.length !== 0) {
      arr.pop();
    } else if (s[i] === ']' && end === '[' && arr.length !== 0) {
      arr.pop();
    } else if (s[i] === '}' && end === '{' && arr.length !== 0) {
      arr.pop();
    } else {
      return false;
    }
  }
  return arr.length === 0;
};

console.log(isValid('({[]})'));
