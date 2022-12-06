var reverse = function (x) {
  const str = x.toString();
  if (str[0] === '-') {
    const neg = str.slice(0, 1);
    const rev = str.split('').reverse().join('').slice(0, -1);
    const whole = neg + rev;
    if (parseInt(whole) < -2147483648) {
      return 0;
    }
    return parseInt(whole);
  } else if (str[0] !== '-') {
    const rev = str.split('').reverse().join('');
    if (parseInt(rev) > 2147483648) {
      return 0;
    }
    return parseInt(rev);
  }
};

reverse(123);
reverse(-123);
reverse(123456789);
