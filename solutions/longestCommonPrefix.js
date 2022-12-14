var longestCommonPrefix = function (strs) {
  let pre = '';
  if (strs === null || strs.length === 0) return pre;

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) return pre;
    }
    pre = pre + char;
  }

  return pre;
};

longestCommonPrefix(['flower', 'flow', 'flight']);
