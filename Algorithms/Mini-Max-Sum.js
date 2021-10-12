// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?utm_campaign=social-buttons&utm_medium=twitter&utm_source=challenge

const testArray = [1,2,3,4,5];

function miniMaxSum(arr) {

  const tempArray = [];

  const total = arr.reduce((prevValue, currentValue) => prevValue + currentValue,0);

  for (let index = 0; index < arr.length; index++) {
    tempArray.push(total - arr[index]);
  }

  const sortedArray = tempArray.sort((a, b) => a - b);

  const output = `${sortedArray[0]} ${sortedArray[4]}`;

  return output;
}

console.log(miniMaxSum(testArray));