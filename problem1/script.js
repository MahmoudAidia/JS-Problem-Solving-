/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j] && i !== j) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
};

let finalResult = twoSum([2, 5, 5, 11], 10);
console.log(finalResult);
