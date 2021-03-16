const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
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
else if (toString.call(date) != toString.call(d) ||
date.getMilliseconds() == 0 || d.getTime() === date.getTime()){
 return THROWN;
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



};
