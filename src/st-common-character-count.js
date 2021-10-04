import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 * 
 * 
npm run test -- test/st-common-character-count.test.js

 */
export default function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
let arr2 = s2.split('');

   let result;
   let count=0;
   //ищу повторения
   function each(s1, s2){
      s1.forEach((el, index)=>{
     if(s2.indexOf(el) > -1) {
       count++;
       result = count;
       delete s2[s2.indexOf(el)];
     }
        else{
            result = count;
        }
     
   })
     if(result != undefined) {
            return result;
     }
     else {
       return 0;
     }
   }
  //console.log(arr1, arr2);
  
  return each(arr1, arr2);
   
}
