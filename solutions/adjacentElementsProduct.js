function solution(inputArray) {
  var first = 0;
  var second = 0;
  var collection = [];
  for (let i = 0; i < inputArray.length; i++) {
    first = inputArray[i];
    second = inputArray[i + 1];
    if (i === inputArray.length - 1) {
      continue;
    }
    var sum = first * second;
    collection.push(sum);
  }
  return Math.max(...collection);
}

solution([3, 6, -2, -5, 7, 3]);
