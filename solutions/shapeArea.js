function solution(n) {
  var answer = 1;
  for (let i = 1; i < n; i++) {
    answer += 4 * i;
  }
  if (n === 1) {
    return 1;
  } else {
    return answer;
  }
}

solution(4);
