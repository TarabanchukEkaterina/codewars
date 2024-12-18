// Wilson primes

// DESCRIPTION:
// Wilson primes satisfy the following condition.Let PPP represent a prime number.
//   Then,
//   (P−1) !+1P∗P\displaystyle\frac{ (P - 1)! + 1 } { P * P } P∗P(P−1)! + 1
// should give a whole number, where P!P!P! is the factorial of PPP.
// Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.

// SOLUTION:
let amIWilson = (p) => p === 5 || p === 13 || p === 563 ? true : false;

console.log(amIWilson(5));//true
console.log(amIWilson(9));//false
console.log(amIWilson(6));//false