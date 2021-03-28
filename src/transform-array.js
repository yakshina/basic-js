const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let m = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != `--double-next` && arr[i] != `--double-prev` 
    && arr[i] != `--discard-next` && arr[i] != `--discard-prev`) {
      m.push(arr[i]);
      j++;
    }
    else {
      switch(arr[i]) {
        case `--double-next`:
          if (arr[i+1] != undefined){  
          m.push(arr[i+1]);
          j++;
          }
          break;
        case `--double-prev`:
          if (arr[i-1] != undefined){
             m.push(arr[i-1]);
             j++;
          }
          break;
        case `--discard-next`:
          if (arr[i+1]  != undefined){    

          if (arr[i+2]  == '--double-prev' || arr[i+2]  == `--discard-prev`) {
            i += 2;
          } else {
            i++;
          }
          }
            break;
        case `--discard-prev`:
          if(arr[i-1] != undefined){
          m.splice(j-1, 1);
          j--;
        }   
        break;
            
      }
    }
  }
  return m;
};
