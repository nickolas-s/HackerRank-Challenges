// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?h_r=next-challenge&h_v=zen

const candles = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
    const result = candles
                  .sort((a, b) => b - a)
                  .reduce((acc, current, i, arr) => {
                    if (current >= arr[0]) return acc += 1;
                
                    return acc;
                  },0);
  
  return result;
}

console.log(birthdayCakeCandles(candles))