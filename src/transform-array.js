import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
npm run test -- test/transform-array.test.js
 */
export default function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let m = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != `--double-next` && arr[i] != `--double-prev` 
    && arr[i] != `--discard-next` && arr[i] != `--discard-prev`) {
      m.push(arr[i]);
      j++;
    }
    else {
      switch(arr[i]) {
        case `--double-next`:
          if (arr[i+1] != undefined){  
          m.push(arr[i+1]);
          j++;
          }
          break;
        case `--double-prev`:
          if (arr[i-1] != undefined){
             m.push(arr[i-1]);
             j++;
          }
          break;
        case `--discard-next`:
          if (arr[i+1]  != undefined){    

          if (arr[i+2]  == '--double-prev' || arr[i+2]  == `--discard-prev`) {
            i += 2;
          } else {
            i++;
          }
          }
            break;
        case `--discard-prev`:
          if(arr[i-1] != undefined){
          m.splice(j-1, 1);
          j--;
        }   
        break;
            
      }
    }
  }
  return m;}
