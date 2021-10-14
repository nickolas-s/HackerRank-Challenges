// Given an array of integers, where all elements but one occur twice, find the unique element.

// https://www.hackerrank.com/challenges/lonely-integer/problem

const testArr = [1, 2, 3, 4, 3, 2, 1];
const testArr0 = [1];
const testArr1 = [1, 1, 2];
const testArr2 = [0, 0, 1, 2, 1];
const testArr3 = [34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31];

function lonelyinteger(a) {

  const result = a
                .sort((a, b) => a - b)
                .reduce((acc, currentValue) => {
                  
                !acc.length ? acc.push(currentValue) 
                : acc[acc.length - 1] === currentValue ? acc.pop()
                : acc.push(currentValue); 

                return acc;
                }, []);
  
  return result[0];
}

console.log(lonelyinteger(testArr));
console.log(lonelyinteger(testArr0));
console.log(lonelyinteger(testArr1));
console.log(lonelyinteger(testArr2));
console.log(lonelyinteger(testArr3));
