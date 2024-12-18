// validate code with simple regex

// DESCRIPTION:
// Basic regex tasks.Write a function that takes in a numeric code of any length.
// The function should check if the code begins with 1, 2, or 3 and return true if so.Return false otherwise.
// You can assume the input will always be a number.

// SOLUTION:

function validateCode(code){
  if (code.toString()[0] === '1' || code.toString()[0] === '2' || code.toString()[0] === '3'){
return true;
  }
return false;

}
console.log(validateCode(123));//true
console.log(validateCode(248));//true
console.log(validateCode(8));//false
console.log(validateCode(321));//true
console.log(validateCode(9453));//false


let validateCode = (code) => code.toString()[0] === '1' || code.toString()[0] === '2' || code.toString()[0] === '3' ? true : false;
