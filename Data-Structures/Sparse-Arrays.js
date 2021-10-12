// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem?utm_campaign=social-buttons&utm_medium=twitter&utm_source=challenge

const testStr = ['aba', 'baba', 'aba', 'xzxb'];
const testQuery = ['aba', 'xzxb', 'ab'];
const testStr2 = ['def', 'de', 'fgh'];
const testQuery2 = ['de', 'lmn', 'fgh'];


function matchingStrings(strings, queries) {

  const matching = queries.map((queryItem) => {
    const instances = strings.filter((strItem) => strItem === queryItem).length;
    return instances;
  })
  
 return matching;
}

console.log(matchingStrings(testStr2, testQuery2));