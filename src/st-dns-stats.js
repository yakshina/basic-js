import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 * 
npm run test -- test/st-dns-stats.test.js

 */
export default function getDNSStats(domains) {
  let key = '';
  let dnsObj = new Object();
  let count = 0;
  //создаю объект
  for(let j = 0; j < domains.length; j++){
    let dns = domains[j].split('.');
  
  
  for(let i=dns.length-1; i >-1 ; i--){
    
    for(let c=0; c< domains.length; c++) {
      if(domains[c].indexOf(dns[i])>-1){
       // console.log(dns[i]);
      count++;
    }
      else count = 0;
    }
   
    
    dns[i] = "."+dns[i];
    key +=dns[i];
    dnsObj[key] = count;
    count = 0;
  }
    key ="";
    
  }
  
  //поиск 

 
  return dnsObj;
}
