// There are two n-element arrays of integers, A and B. Permute them into some A' and B' such that the relation A'[i] + B'[i] >= k holds for all i where 0 <= i < n. There will be q queries consisting of A, B, and k. For each query, return YES if some permutation A', B' satisfying the relation exists. Otherwise, return NO.

// https://www.hackerrank.com/challenges/one-month-preparation-kit-two-arrays/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

const testK = 10;
const queryA = [2, 1, 3];
const queryB = [7, 8, 9];

const testK2 = 5
const queryA2 = [1, 2, 2, 1]
const queryB2 = [3, 3, 3, 4]

const testK3 = 9
const queryA3 = [3, 6, 8, 5, 9, 9, 4, 8, 4, 7]
const queryB3 = [5, 1, 0, 1, 6, 4, 1, 7, 4, 3]



function twoArrays(k, A, B) {
 
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a );

  const copyB = [...sortedB];
  const permutatedB = [];

  for (let i = 0; i < A.length; i++) {
    
      for (let j = 0; j < copyB.length; j++) {
        if(sortedA[i] + copyB[j] >= k) {  
          permutatedB.push(copyB[j]);
          copyB.splice(j , 1);
          break;
        }
      }
  } 

  return A.length === permutatedB.length ? 'YES' : 'NO'
}

console.log(twoArrays(testK2, queryA2, queryB2));
console.log(twoArrays(testK3, queryA3, queryB3));