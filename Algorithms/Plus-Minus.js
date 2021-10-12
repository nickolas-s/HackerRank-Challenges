// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem?utm_campaign=social-buttons&utm_medium=twitter&utm_source=challenge

const testArray = [ -4, 3, -9, 0, 4, 1 ];

function plusMinus(arr) {

  const denominator = arr.length;

  const positiveNumerator = arr.reduce((prevValue, currentValue) =>  currentValue > 0 ? prevValue += 1 : prevValue, 0);
  const negativeNumerator = arr.reduce((prevValue, currentValue) =>  currentValue < 0 ? prevValue += 1 : prevValue, 0);
  const zeroNumerator = arr.reduce((prevValue, currentValue) =>  currentValue === 0 ? prevValue += 1 : prevValue, 0);

  console.log((positiveNumerator/denominator).toFixed(6));
  console.log((negativeNumerator/denominator).toFixed(6));
  console.log((zeroNumerator/denominator).toFixed(6));
}

console.log(plusMinus(testArray));