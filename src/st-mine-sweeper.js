import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 * 
npm run test -- test/st-mine-sweeper.test.js

 */
export default function minesweeper (matrix) {
  let m = matrix.length, n = matrix[0].length;
  let result=[];
  //создаю массив
for (let i=0;i<m;i++){
      result[i] = [];
  for (let j=0;j<n;j++){
    result[i][j]=0;
    }
  }
//console.log(result);
  let count = 0;
  for (let i =0; i < matrix.length; i++) {
    if(matrix[i].indexOf(true)>-1){
      count++;
      
    }
  }
  if(count == 0){
    return result;
  }

//заполняю
  for (let i=0;i<n;i++){
  for (let j=0;j<m;j++){
    if(!matrix[i][j]) {
      result[i][j] = 0;
      if((typeof(matrix[j-1]) !== 'undefined')&&(matrix[i][j-1])) {
        result[i][j]++;
      }
      if((typeof(matrix[i+1]) !== 'undefined')&&(matrix[i+1][j])) {
        result[i][j]++;
      }
       if((typeof(matrix[j+1]) !== 'undefined')&&(matrix[i][j+1])) {
        result[i][j]++;
      }
      if((typeof(matrix[i-1]) !== 'undefined')&&(matrix[i-1][j])) {
        result[i][j]++;
      }
      if(result[i][j] == 0) result[i][j] = 1;
    }
    else {
            result[i][j] = 1;
    }
    }
  }
  return result;
}
