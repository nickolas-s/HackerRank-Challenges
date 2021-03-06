// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// https://www.hackerrank.com/challenges/diagonal-difference/problem

const square = [
  [11, 2, 4,],
  [ 4, 5, 6,],
  [10, 8, -12]
];

function diagonalDifference(arr) {

  const diagonal1 = arr.reduce((acc, curentValue, i) => {
    acc += curentValue[i];
    return acc
  },0)

  const diagonal2 = arr.reduce((acc, curentValue, i, originalArr) => {
    acc += curentValue[originalArr.length -  (i + 1)];
    return acc
  },0)

  let diagonalDiff = diagonal1 - diagonal2;
  
  diagonalDiff >= 0 ? diagonalDiff : diagonalDiff = diagonalDiff * - 1;
  
  return diagonalDiff;
}

console.log(diagonalDifference(square));