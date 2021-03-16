const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    
    
  },
  addLink(value) {
    let v1 = '( ' + value + ' )';
    
        let v = v1;
          
           let x = { addLink(value) {
            
            if (value != undefined){
                let v2 = '~~( ' + value + ' )' ; 
                	let vv = v + v2;
                		return vv;
                        }
                       }
                       
                    }
        // document.write(Object.keys(x));
            if (Object.keys(x) != 'addLink'){
            	return v;
               }
             
             return x;
  },
  removeLink(position) {
    delete chainMaker[position];
    return chainMaker;
  },
  reverseChain() {
    return chainMaker.reverse();
 
  },
  finishChain() {
    
  }
};

module.exports = chainMaker;
