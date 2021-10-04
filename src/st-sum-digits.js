import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
npm run test -- test/st-sum-digits.test.js

 */
export default function getSumOfDigits(n) {
  //throw new NotImplementedError('Not implemented');
  let digit = (n+"").split('');
  let arrSum = 0;
for(let i = 0; i < digit.length; i++){
arrSum += digit[i]*1;
} 
if((arrSum+"").split('').length>1) {
    return getSumOfDigits(arrSum);
}
else {
return arrSum;
}
}
