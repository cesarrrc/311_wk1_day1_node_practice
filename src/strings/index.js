/**
 * This function splits a string on the provided delimiter 
 * and returns the resulting array
 * for example:
 * str: 'the brown fox jumped over the lazy dog'
 * delim: ['the', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']
 * @param {string} str the string to split
 * @param {string} delim delim the character to split on
 */
const split = (str, delim) => {
  // write code for strings.split
  //hint: look at the split method on strings
  let splitWord = str.split(delim);
  return splitWord
}

const pairs = (str) => {
  // write code for strings.pairs
  let pairSplit = [];
  for(i=0; i < str.length - 1; i += 2){
    pairSplit.push(str[i] + str[i+1])
  }
  return pairSplit
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("")
  return joinArray
}

module.exports = {
  split,
  pairs,
  reverse
}