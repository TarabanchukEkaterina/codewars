// Template Strings

// DESCRIPTION:
// Your task is to return the correct string using the Template String Feature. 
// You must output a string containing the two strings with the word```' are '``` 

// SOLUTION:
let templateStrings = (noun, adjective) => noun + ' are ' + adjective;

// or
// let templateStrings = (noun, adjective) => `${noun} are ${adjective}`;


console.log(templateStrings('Animals', 'Good'));//'Animals are Good'
console.log(templateStrings('You', 'special'));//'You are special'
console.log(templateStrings('lives', 'frozen'));//'lives are frozen'
