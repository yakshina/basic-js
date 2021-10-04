import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 * 
npm run test -- test/st-matrix-elements-sum.test.js

 */
export default function getMatrixElementsSum(matrix) {
  let count = 0;
  for (let i=0;i<matrix.length;i++){
  for (let j=0;j<matrix[0].length;j++){
   //console.log(matrix[i][j]);
      if(i>0) {
        if(matrix[i-1][j]!=0) {
           //console.log(matrix[i][j]);
        count+=matrix[i][j];
      }
      } else {
                count+=matrix[i][j];
      }
    }
  }
  return count;
}
