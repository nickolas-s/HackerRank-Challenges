// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it. Lily decides to share a contiguous segment of the bar selected such that: - The length of the segment matches Ron's birth month, and, -The sum of the integers on the squares is equal to his birth day.Determine how many ways she can divide the chocolate.

// https://www.hackerrank.com/challenges/the-birthday-bar/problem

const share = [1, 2, 1, 3, 2];
const day = 3; //sum total
const month = 2; //array length

function birthday(s, d, m) {

  let count = 0

  for (let i = 0; i < s.length - m +1; i++) {
    let sum = 0;

    for (let j = 0; j < m; j++) {
      sum = sum + s[i + j];
    }
   
    if (sum === d) {
     count ++;
   } 
  }
  
  return count;
}

console.log(birthday(share, day, month));