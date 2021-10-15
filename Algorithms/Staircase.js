/*
Staircase detail
This is a staircase of n = 4 size :
   #
  ##
 ###
####
Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Write a program that prints a staircase of size n.
*/

// https://www.hackerrank.com/challenges/staircase/problem?h_r=next-challenge&h_v=zen

const stairSize = 6;

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${' '.repeat(n - i) + '#'.repeat(i)}`);
  }
}

console.log(staircase(stairSize));