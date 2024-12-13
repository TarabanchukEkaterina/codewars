// Hello, Name or World!

// DESCRIPTION:

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given(or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter(Xxxx).
//   Examples:
// * With`name` = "john"  => return "Hello, John!"
// * With`name` = "aliCE" => return "Hello, Alice!"
// * With`name` not given
// or`name` = ""        => return "Hello, World!"

// SOLUTION:

function hello(name) {
  if (name === undefined || name === '') {//Hello, World!, если имя не задано (или передано как пустая String).
    return 'Hello, World!';
  } else {//имя является строкой и проверяется на опечатки пользователя(вернуть имя с первой заглавной буквой)
    let lowerName = name.toLowerCase();//приводим к низу
    let splitName = lowerName.split("");// делим слово на отдельные буквы
    let firstLetter = splitName[0].toUpperCase();// делаем первую букву в массиве заглавной 
    let copyArr = [...splitName];// копируем массив что бы не модицицировать lowerName напрямую если вдрг он нам понадобиться далее
    copyArr.splice(0, 1);// удаляем первую букву из нового массива 
    let correctName = [firstLetter, ...copyArr].join("");//первая заглавная буква + новый массив и соединияем все обратно в строку
    let greeting = "Hello, " + correctName + "!";

    return greeting;
  }
}
console.log(hello('johN'));//'Hello, John!'
console.log(hello('alice'));//'Hello, Alice!'
console.log(hello());//'Hello, World!'
console.log(hello(''));//'Hello, World!'