import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 * 
npm run test -- test/st-sort-by-height.test.js

 */
export default function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');

  
  if(arr.indexOf(-1) == (-1)){
    for(let i = 0; i < arr.length-1; i++) {
      for(let j = 0; j < arr.length-i; j++){
      if(arr[j]>arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }

  }
          return arr;
  }


  
  let newArr = [];
  
  
  arr.forEach((el)=>{
    if(el!=-1) {
      newArr.push(el);
    }
  })
 // newArr.sort();
for(let i = 0; i < newArr.length-1; i++) {
      for(let j = 0; j < newArr.length-i; j++){
      if(newArr[j]>newArr[j+1]) {
        [newArr[j], newArr[j+1]] = [newArr[j+1], newArr[j]];
      }
    }

  }

  
  arr.forEach((el, index)=>{
    if(el != -1) {
      arr[index] = newArr[0];
      newArr.splice(0,1);
    }
  })
  
  return arr;

}
