const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let m = [];
  str = str+"";

  if(options.addition === undefined) {
    options.addition = '';
  }
  if(options.addition === null) {
    options.addition = 'null';
  }
 

  if(options.separator === undefined) {
    options.separator = '+';
  }
  if(options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if(options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  
  if(options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    m.push(str);

  }

  for (let i = 0; i < m.length; i++) {
    for(let j = 0; j < options.additionRepeatTimes; j++){
      if(options.addition != undefined) {
        let add = options.addition + "";
        m[i]+=add;
        if(options.additionRepeatTimes > 1 && options.additionRepeatTimes != j+1){
          m[i] += options.additionSeparator;
        }
        
         
      }
   
    }
    

  }

  
  return m.join(options.separator);
};
  