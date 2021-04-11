const { pairs } = require("../strings");

/**
 * Returns true if the number is even
 * @param {number} num 
 */
const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 == 0){
    return true;
  } else {
    return false;
  }

}

/**
 * 
 * @param {*} arr 
 */
const sum = (arr) => {
  // write code for numbers.sum

  let sumTotal = arr.reduce(function(total, currentValue){
    return total + currentValue
  })

  return sumTotal
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let numList = [];
  let pairs = [];

  for(let i = 0; i < arr.length; i++){
    let currNum = arr[i];
    let diff = sum - currNum;
    if(numList.includes(diff)) {
      pairs.push([currNum, diff]);
    }
    numList.push(currNum);
  }
  
  if(pairs.length > 0){
    return true
  } else {
    return false
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}