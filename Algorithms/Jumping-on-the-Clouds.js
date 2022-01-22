// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus '1' or '2'. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game. For each game, you will get an array of clouds numbered '0' if they are safe or '1' if they must be avoided.

// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true

const testArray = [0,0,1,0,0,1,0];

function jumpingOnClouds(c) {
  let numberOfJumps = 0;
  const clouds = [...c];
  
  while (clouds.length) {
      console.log(clouds)
      if (clouds[0] === 0 && clouds[2] === 0) {
        clouds.splice(0,2)
        numberOfJumps ++;
    } else if (clouds[0] === 0 && clouds[1] === 0) {
      clouds.splice(0,1)
        numberOfJumps ++;
    } else {
        clouds.splice(0,2)
    }
  }
  
  return numberOfJumps;
}

console.log(jumpingOnClouds(testArray));