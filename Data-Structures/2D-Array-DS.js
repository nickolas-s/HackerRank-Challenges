/* Given a 6 X 6 2D Array, arr: 
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
An hourglass in 'A' is a subset of values with indices falling in this pattern in arr's graphical representation:
a b c
  d
e f g
There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6 X 6.
*/

// https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true

const testArr = [
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]
];

function hourglassSum(arr) {
  
  const hourglasses = arr.reduce((totals, currentArr, index) => {
      if (index <= 3) {
          for (let i = 0; i <= 3; i++) {
              const topRow = currentArr[i] + currentArr[i + 1] + currentArr[i + 2];
              const middleRow = arr[index + 1][i + 1];
              const bottomRow = arr[index + 2][i] + arr[index + 2][i + 1] + arr[index + 2][i + 2];
              const hourglass = topRow + middleRow + bottomRow;
              totals.push(hourglass);
          }
      }
  
      return totals;
  },[]);
  
  const hourglassesSorted = hourglasses.sort((a, b) => b - a);
  return hourglassesSorted[0];
}

console.log(hourglassSum(testArr));
