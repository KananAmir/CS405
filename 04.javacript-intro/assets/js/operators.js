//arichmetic operatos
let firstNumber = 15;
let secondNumber = 7;

let sum = firstNumber + secondNumber;
let difference = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
// let quotient = firstNumber / secondNumber;
// let quotient = parseInt(firstNumber / secondNumber);
let quotient = (firstNumber / secondNumber).toFixed(2); // string
let reminder = firstNumber % secondNumber; // 1

console.log(2**5); //32

console.log("sum:", sum);
console.log("difference:", difference);
console.log("product:", product);
console.log("quotient:", quotient);
console.log("reminder:", reminder);
let x = 5;

// x = x+1
x++
console.log(x); // 6

// assignment operators

let a = 5;

// a+=3;
a= a + 3

console.log(a);

//Comparison Operators

// let n = 13
let n = "13" //string
let m = 13  //number
console.log(n==m); //true
console.log(n===m); //false
console.log(n > 10); //true
console.log(m <= 0); //false

console.log(n!=m); // false


let firstName = "John";
let surname = "Doe"

console.log(firstName + surname); // "JhonDoe"
console.log(firstName + " " + surname); // "Jhon Doe"

console.log("a" + "b"); //ab
console.log("a" - "b"); //NaN
console.log("a" * "b"); //NaN
console.log("a" / "b"); //NaN

console.log("a" > "b"); //false
console.log("afiq" > "ali"); //false


console.log(15 + 3); //18
console.log(15 + "3"); //153
console.log("15" + "3"); //153


//Logical Operators

// &&
// ||
// !

console.log(15>12 && 12< 17); // true
console.log(15<12 && 12< 17); // false
console.log(15>12 || 12< 17); // true
console.log(15<12 || 12< 17); // true
console.log(15<12 || 12>17); // false
let bool = false
console.log(!bool);





