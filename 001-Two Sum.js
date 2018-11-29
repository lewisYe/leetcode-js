/**
 * https://leetcode-cn.com/problems/two-sum/
 * Difficulty：easy
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

// solution one 
var twoSum = function (nums, target) {
  let length = nums.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9)
console.log(twoSum([2, 7, 11, 15], 9))


// solution two 

var twoSum1 = function (nums, target) {
  let map = {};
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    var flag = nums[i];
    if (map[target - flag] === undefined) {
      map[flag] = i;
    } else {
      return [map[target - flag], i]
    }
  }
};

twoSum([2, 7, 11, 15], 9)
console.log(twoSum([2, 7, 11, 15], 9))


// summary 
/**
 * 方案一  简单暴力直接可以想到 比较耗费时间 时间复杂度O(n2)
 * 方案二  时间复杂度O(n) 速度提升
 */


