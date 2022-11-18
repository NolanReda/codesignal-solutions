var isAnagram = function (s, t) {
  const ns = s.split('').sort().join('').toLowerCase();
  const nt = t.split('').sort().join('').toLowerCase();
  if (ns === nt) {
    return true;
  } else {
    return false;
  }
};

isAnagram('anagram', 'nargama');
