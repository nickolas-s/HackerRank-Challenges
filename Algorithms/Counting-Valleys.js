// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly 'steps' steps, for every step it was noted if it was an uphill 'U', or a downhill, 'D' step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
// · A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// · A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true

const numberStepsTest = 8
const stepsDirectionTest = 'UDDDUDUU';
const numberStepsTest2 = 12
const stepsDirectionTest2 = 'DDUUDDUDUUUD';


function countingValleys(steps, path) {
  const pathArray = path.split('');
  let valleysCount = 0;
  let level = 0;
 
  pathArray.map((step) => {
      if (step === "D") {
          level ++;
        } else if (step === "U") {
          level --;
          if (level === 0) valleysCount ++
        }
  });
 
  return valleysCount;
}

console.log(countingValleys(numberStepsTest, stepsDirectionTest));