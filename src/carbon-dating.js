import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
npm run test -- test/carbon-dating.test.js
 */
export default function dateSample(sampleActivity) {
  const log = 0.693;
 
  if ((typeof(sampleActivity) === typeof(' '))&&(typeof(sampleActivity*1) == typeof(1))){

    let s = sampleActivity*1;
 
   if (!(isNaN(s)) && s > 0 && s < 15 ) {
     let n = MODERN_ACTIVITY/s; 
     let k = log/HALF_LIFE_PERIOD;
     let t = Math.ceil(Math.log(n)/k);
     return t;
   }
     else {
       return false;
     }
 
   }
   else{
     return false;
   }  
}