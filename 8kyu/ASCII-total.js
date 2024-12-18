// ASCII Total

// DESCRIPTION:
// You'll be given a string, and have to return the sum of all characters as an int.
// The function should be able to handle all printable ASCII characters.
// Examples:
// uniTotal("a") == 97
// uniTotal("aaa") == 291

// SOLUTION:

function uniTotal(string) {
  if (string === '') {
    return 0;
  }
  if (string.length === 1) {
    return string.charCodeAt(0);
  } else {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
      arr.push(string.charCodeAt(i));
    }
    return arr.reduce((acc, number) => acc + number, 0);
  }
}

console.log(uniTotal(""));//0   
console.log(uniTotal("a"));//97 
console.log(uniTotal("b"));//98
console.log(uniTotal("c"));//99
console.log(uniTotal("d"));//100
console.log(uniTotal("e"));//101
console.log(uniTotal("aaa"));//291
console.log(uniTotal("Mary Had A Little Lamb"));//1873 