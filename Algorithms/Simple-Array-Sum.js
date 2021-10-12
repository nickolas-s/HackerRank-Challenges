// Given an array of integers, find the sum of its elements.

// https://www.hackerrank.com/challenges/simple-array-sum/problem

const sample = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
  
  const sum = ar.reduce((acc, current) => acc += current ,0);

  return sum;
}

console.log(simpleArraySum(sample));