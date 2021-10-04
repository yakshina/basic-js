import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
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
}