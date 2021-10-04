import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 * 
npm run test -- test/st-encode-line.test.js

 */
export default function encodeLine(str) {
  let arr = str.split('');
   let strcount = [];
   let count=1;
   
   function each(arrnew){
      arrnew.forEach((el, index)=>{
     if(el == arrnew[index+1]) {
       count++;
     }
        else{
            if(count == 1){
              strcount.push(arrnew[index]);
            }
          else {
            strcount.push(count+""+arrnew[index]);
            count = 1;
          }
            
          
        }
     
   })
     return strcount.join('');
   }
   //each(arr);
   return each(arr);
}
