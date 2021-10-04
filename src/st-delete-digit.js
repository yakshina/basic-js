import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 * 
npm run test -- test/st-delete-digit.test.js

 */
 export default function deleteDigit(n) {
 
  let number = (n+'').split('');
  let min = number[0]
  number.forEach((el)=>{
    if(el*1 < min*1){
      min = el;
    }
  })
  delete number[number.indexOf(min)];
  let result = number.join('');
  return result*1;
}
