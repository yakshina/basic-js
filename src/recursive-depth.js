const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let x;
    if (Array.isArray(arr)) {
      x = 1 + Math.max(...arr.map(m => this.calculateDepth(m)));
      return x;
    } 
    else {
      return 0;
    }
  }
  };