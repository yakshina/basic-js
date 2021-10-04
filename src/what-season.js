import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
npm run test -- test/what-season.test.js

 */
export default function getSeason(date) {

  const season =  [ 
    'winter', 
    'spring', 
    'summer', 
    'autumn',
]
let d = new Date();

if (date === null){
  return null;
}
else if (date === undefined){
  return 'Unable to determine the time of year!';
}
else if (Object.entries(date).length > 0) {
  throw new Error('Invalid date!')
}
else if (toString.call(date) != toString.call(d) ||
date.getMilliseconds() == 0 || d.getTime() === date.getTime()){
  throw new Error("Invalid date!");
 }

if (date.getMonth() < 2 || date.getMonth() == 11) {
  return season[0];
}
if (date.getMonth() > 1 && date.getMonth() < 5) {
  return season[1];
}
if (date.getMonth() > 4 && date.getMonth() < 8) {
  return season[2];
}
if (date.getMonth() > 7 && date.getMonth() < 11) {
  return season[3];
}

}
