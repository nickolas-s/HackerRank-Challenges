// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

// https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

//pangram
const testInput00 = 'We promptly judged antique ivory buckles for the next prize'; 

// not pangram
const testInput01 = 'We promptly judged antique ivory buckles for the prize';

function pangrams(s) {
 
  const lettersArr = s.
                    toLowerCase().
                    split('')
                    .filter((letter) => letter.match(/[a-z]/i))
                    .reduce((acc, letter, i, originalArray) => {
                       !acc.includes(letter) ? acc.push(letter) : acc;
                      return acc
                    }, []).length;

  return lettersArr === 26 ? 'pangram' : 'not pangram'
}

console.log(pangrams(testInput00));
console.log(pangrams(testInput01));