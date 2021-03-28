const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    
  calculateDepth(arr) {

    if (Array.isArray(arr)) {
      let count = 0;
      let max = 0;
      arr.forEach((item) => {

        count = this.calculateDepth(item);

        if (count > max) {
          max = count;
          count = 0;
        }
      });

      return max + 1;

    }

    else {
      return 0;
    }
    
    
  }
  };