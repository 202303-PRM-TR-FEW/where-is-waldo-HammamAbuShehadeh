const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"],
];

const whereIsWaldo = (matrix) => {
  let waldo = "";
  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      waldo = matrix[0][0];
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

// find the differant elemant 
// function to find the elemant 
// nasted array 
// variable  to save element into 
// need for loop to access to array in raw (outer loop ) ( i => raw -1 )
// need other for loop to access in in elemant in the raw array ( inner loop) (j => column -1 )
// reassigin variable with first element in raw 
// if condition 
// if it is same value and type contiune the inner loop
// if not the same return index +1 for raw (i +1 )and column (j + 1) 