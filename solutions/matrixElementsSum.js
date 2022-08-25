function solution(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let l = 0; l < matrix[i].length; l++) {
      if (matrix[i][l] === 0) {
        if (i + 1 < matrix.length) {
          matrix[i + 1][l] = 0;
        }
      } else {
        sum += matrix[i][l];
      }
    }
  }
  return sum;
}
