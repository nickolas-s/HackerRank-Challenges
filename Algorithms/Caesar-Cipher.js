// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

const clearTxt = 'middle-Outz';
const lettersToRotate = 2;

function caesarCipher(s, k) {
  let secretStr = '';

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      let secretLetter = charCode + k;
      while ((secretLetter) > 122) {
        secretLetter -= 26;
      }
      secretStr = secretStr + String.fromCharCode(secretLetter)

    } else if (charCode >= 65 && charCode <= 90) {
      let secretLetter = charCode + k;
      while ((secretLetter) > 90) {
        secretLetter -= 26;
      }
      secretStr = secretStr + String.fromCharCode(secretLetter)
    } else {
      secretStr = secretStr + String.fromCharCode(charCode);
    }
    
  }

  return secretStr;
}

console.log(caesarCipher(clearTxt, lettersToRotate));