// There is a string, 's', of lowercase English letters that is repeated infinitely many times. Given an integer, 'n', find and print the number of letter a's in the first 'n' letters of the infinite string.

// https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true

const strTest = 'aba';
const charNumberTest = 10;
const strTest2 = 'a';
const charNumberTest2 = 1000000000000;

function repeatedString(s, n) {
  const strArray = s.split('');
  const strLength = s.length;
  const aFrequency = strArray.filter((letter) => letter === 'a').length;
  const remaining = n%strLength;
  let aTotals = 0;
  
  if (remaining === 0) {
      aTotals = (n / strLength) * aFrequency;
  } else {
      aTotals = ((n - remaining)/ strLength) * aFrequency;
      const remainingAs = strArray
                          .slice(0,remaining)
                          .filter((letter) => letter === 'a')
                          .length;
      
      aTotals = aTotals + remainingAs;
  }
  
  return aTotals;
}

console.log(repeatedString(strTest,charNumberTest));
