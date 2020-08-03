"use strict";
var TwoSum = (function () {
  function TwoSum() {}
  TwoSum.prototype.twoSum = function (nums, target) {
    const m = {};
    for (let i = 0; i < nums.length; i++) {
      if (m[nums[i]] >= 0) {
        return [m[nums[i]], i];
      }
      m[target - nums[i]] = i;
    }
  };
  return TwoSum;
}());
module.exports = TwoSum;
