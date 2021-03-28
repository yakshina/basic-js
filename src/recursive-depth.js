const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)&& !(arr.length == 0)) {
      let x = calculateDepth(arr[0]) + 1;
      return x;
    }
    else {
      return 0;
    }
  }
  };