"use strict";
const TwoSum = require("./TwoSum");

function testTwoSum() {
  const solution = new TwoSum();
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = solution.twoSum(nums, target);
  console.log(result);
}

testTwoSum();
