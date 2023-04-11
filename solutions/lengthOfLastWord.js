const lengthOfLastWord = function (s) {

  const ret = s.split(' ');

  if (ret.slice(-1)[0] === '') {
    const newRet = s.split(' ');
    for (let i = newRet.length - 1; i > -1; i--) {
      if (newRet[i].length > 0) {
        return newRet.slice(i)[0].split('').length;
      }
    }
  }
  return ret.slice(-1)[0].split('').length;
};

// eslint-disable-next-line
console.log(lengthOfLastWord('Hello World'));
// eslint-disable-next-line
console.log(lengthOfLastWord('   fly me   to   the moon  '));
// eslint-disable-next-line
console.log(lengthOfLastWord('luffy is still joyboy'));
// eslint-disable-next-line
console.log(lengthOfLastWord('a '));
