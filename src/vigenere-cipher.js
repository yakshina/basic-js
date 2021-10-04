import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
npm run test -- test/vigenere-cipher.test.js

 */
export default class VigenereCipheringMachine {
  
  constructor(value) {
    if(value === false) {
      this.value = value;
    } else {
      this.value = !value;
    }
      
    
    }
  

  encrypt(message, key) {

    if (message == undefined || key === undefined) {
      throw new Error("Incorrect arguments!")
    }

    let m = message.toUpperCase().split("");
    let k = key.toUpperCase().split("");
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let all = " 1234567890!@#$(),./|*-&^%:";
    let vig = [];
    let enc = "";
    let newk = [];
    let cout = 0;
    //сопоставляю длину строки key по длину строки messege
        
    for(let i = 0; i < m.length; i++) {
      if(all.indexOf(m[i]) != -1) {
        newk.push(m[i]);
        
      }
      else {
        if (key[cout] === undefined) {
          cout = 0;
        	newk.push(key[cout]);
            cout++;
        }
        else {
        newk.push(key[cout]);
        cout++;
        }
      }
   
  } 

    //создаю таблицу vigenere
        for (let i = 0; i < a.length; i++) {
      	let row = a.slice(i);
      	row += a.slice(0, i);
      	vig.push(row);
    }
    
    let n = newk.join("").toUpperCase();
    let x, y;
    m = m.join("");
      for(let i = 0; i < m.length; i++) {
      if(all.indexOf(m[i]) != -1) {
        enc += m[i];
      }
      else {
      
      	x = a.indexOf(m[i]);
      	y = a.indexOf(n[i]);
       if (x != -1 && y != -1) {
       	enc += vig[x][y];
       }
       
       }

      
    }
    if (this.value) {
      return enc;
    }
    else {
      return enc.split('').reverse().join('');
    }
    //return(enc);


}    
  decrypt(message, key) {
    

    if (message == undefined || key === undefined) {
      throw new Error("Incorrect arguments!")
    }
    // if(message == undefined || key === undefined) {
    //   throw new Error();
    // }

    let m = message.toUpperCase().split("");
    let k = key.toUpperCase().split("");
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let all = " 1234567890!@#$(),./|*-&^%:;";
    let vig = [];
    let dec = "";
    let newk = [];
    let cout = 0;
    //сопоставляю длину строки key по длину строки messege
        
    for(let i = 0; i < m.length; i++) {
      if(all.indexOf(m[i]) != -1) {
        newk.push(m[i]);
        
      }
      else {
        if (key[cout] === undefined) {
          cout = 0;
        	newk.push(key[cout]);
            cout++;
        }
        else {
        newk.push(key[cout]);
        cout++;
        }
      }
   
  } 

    //создаю таблицу vigenere
        for (let i = 0; i < a.length; i++) {
      	let row = a.slice(i);
      	row += a.slice(0, i);
      	vig.push(row);
    }
    
    let n = newk.join("").toUpperCase();
    let x, y;
    m = m.join("");

      for(let i = 0; i < m.length; i++) {
      if(all.indexOf(m[i]) != -1) {
        dec += n[i];
      }
      else {
      	x = a.indexOf(n[i]);
      	y = vig[x].indexOf(m[i]);      
       	dec += a[y];
       }

      
    }
    if (this.value) {
      return dec;
    }
    else {
      return dec.split('').reverse().join('');
    }
    //return(dec);
  }
}

