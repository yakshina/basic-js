import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 * 
npm run test -- test/simple-chain.test.js

 */
export default {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )');
    return this;
    
  },
  removeLink(position) {
    if((!this.arr[position]) || (isNaN(position)) || (position<1)){
      this.arr.length = 0;
      console.log("You can't remove incorrect link!");
      throw new Error("You can't remove incorrect link!");
    }
    else {
      this.arr.splice(position-1, 1);
      //console.log("You can't remove incorrect link!");

 //npm run test -- test/simple-chain.test.js   
    return this;
    }
    
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let value =  this.arr.join('~~');
    this.arr.length = 0;
    return value;
  }
};
