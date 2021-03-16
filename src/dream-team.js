const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let y = [];
  let n =[];
  
  if (!(Array.isArray(members))){
    return false;
  }

  let f = members.filter(function (el){
    return typeof(el) == typeof(' ');
  });

  for (let i = 0; i < f.length; i++){
  
    n = f[i].split('');
    let filter = n.filter(function (el){
    return el != ' ';
  });
    y.push(filter[0].toUpperCase());
    
  }
  return y.sort().join('');

};
