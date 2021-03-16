const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 const log = 0.693;
 
 if (typeof(sampleActivity) === typeof(' ')){
  s = sampleActivity*1;

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

};
