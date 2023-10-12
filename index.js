const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"],
];

const whereIsWaldo = (matrix) => {
  let waldo = "";
  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      waldo = matrix[i][0];
      if (waldo === matrix[i][j]) {
        continue;
      } else {
        waldo = matrix[i][j];
        console.log([i + 1, j + 1]);
        return [i + 1, j + 1];
      }
    }
  }
};

whereIsWaldo(example);

whereIsWaldo([
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"],
]);
// ➞ [3, 2]

whereIsWaldo([
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"],
]);
// ➞ [2, 4]

whereIsWaldo([
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"],
]);
// ➞ [5, 1]
