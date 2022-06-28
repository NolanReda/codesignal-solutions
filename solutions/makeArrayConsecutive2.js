function solution(statues) {
  var missing = [];
  var order = statues.sort((a, b) => a - b);
  var f = order[0];
  var l = order[order.length - 1];
  for (let i = f; i < l; i++) {
    if (!order.includes(i)) {
      missing.push(i);
    }
  }
  return missing.length;
}

solution([6, 2, 3, 8]);
