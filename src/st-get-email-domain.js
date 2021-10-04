import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 * 
npm run test -- test/st-get-email-domain.test.js

 */
export default function getEmailDomain(email) {
  let index = email.indexOf('@');
  let domain = email.substring(index+1, email.string);
  if(domain.indexOf('@')===-1){
    return domain;
  }
  else {
    return getEmailDomain(domain);
  }
}
