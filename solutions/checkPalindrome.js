function solution(inputString) {
  var newArr = [];
  var forward = '';
  var reverse = '';
  var split = inputString.split(' ');
  for (let i = 0; i < split.length; i++) {
    var secondSplit = split[i].split('').join('');
    newArr.push(secondSplit);
    console.log(newArr);
    forward = newArr.join('');
    reverse = forward.split('').reverse().join('');
  }
  if (forward === reverse) {
    return true;
  } else {
    return false;
  }
}
