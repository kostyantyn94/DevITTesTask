function findAndMultiply(matrix) {
  let min = Infinity;
  for (let row of matrix) {
    for (let num of row) {
      if (num < min) {
        min = num;
      }
    }
  }

  let result = [];
  for (let row of matrix) {
    let newRow = [];
    for (let num of row) {
      newRow.push(num % 2 !== 0 ? num * min : num);
    }
    result.push(newRow);
  }

  return result;
}

const matrix = [
  [5, 3, 6],
  [7, 11, 2],
  [15, 9, 4],
];

const resultMatrix = findAndMultiply(matrix);
console.log(resultMatrix);
