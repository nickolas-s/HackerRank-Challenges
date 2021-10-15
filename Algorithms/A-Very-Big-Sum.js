// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// https://www.hackerrank.com/challenges/a-very-big-sum/problem

const bigArr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {

  const result = ar.reduce((acc, number) => acc + number, 0);
  
  return result;
}

console.log(aVeryBigSum(bigArr));