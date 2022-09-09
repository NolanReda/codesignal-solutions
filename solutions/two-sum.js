var twoSum = function (nums, target) {
  let sum;
  let current = 0;
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    sum = nums[current] + nums[i];
    if (sum === target && current !== i) {
      answer.push(current, i);
      return answer;
    } else if (current === nums.length) {
      return;
    } else if (i === nums.length - 1) {
      i = 0;
      current++;
    }
  }
  return answer;
};

twoSum([3, 2, 4], 6);
twoSum([2, 7, 11, 15], 26);
