const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )');
    return this;
    
  },
  removeLink(position) {
    if(!isNaN(position)){
      this.arr.splice(position-1, 1);
    }
    else {
      this.arr = [];
      throw new Error("Something went wrong!");
      
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let value =  this.arr.join('~~');
    this.arr = [];
    return value;
  }
};

module.exports = chainMaker;
