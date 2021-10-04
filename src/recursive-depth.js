import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr ) {
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
  }
