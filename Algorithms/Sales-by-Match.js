// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// https://www.hackerrank.com/challenges/sock-merchant/problem

const lenghtTestArr = 9;
const testArr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const testArr2 = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5];
const testArr3 = [10];

function sockMerchant(n, ar) {

  let numberOfPairs = 0;
  const arrCopy = [...ar.sort((a, b) => a - b)]
 
  while (arrCopy.length) {
    if(arrCopy[0] === arrCopy[1]) {
      numberOfPairs ++;
      arrCopy.splice(0, 2);
    } else {
      arrCopy.shift();
    }
  }

  return numberOfPairs;
}

console.log(sockMerchant(lenghtTestArr, testArr));