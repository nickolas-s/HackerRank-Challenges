// The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?

// https://www.hackerrank.com/challenges/find-the-median/problem

const testAr = [0, 1, 2, 4, 6, 5, 3];

function findMedian(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const medianIndex = Math.floor(sortedArr.length/2);
  
  return sortedArr[medianIndex];

}

console.log(findMedian(testAr));