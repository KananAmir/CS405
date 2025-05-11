//functions

//declearation function (regular)
//function expressions
//arrow functions

let user = {
    name: 'John',
    age: 30,
    email: "jhon@gmail.com"
}

function sayHi() {
    console.log("Hello!");
}

sayHi() // function call

// function greeting(username){
//     console.log(`Welcome, ${username}`);
// }

//default value
function greeting(username = "Your Username") {
    console.log(`Welcome, ${username}`);
}

greeting("Ali")
greeting("Afar")
greeting("Ahad")
greeting(user.name)
greeting()

function sum(a, b) {
    let sum = a + b
    return sum
}

// console.log(sum(1,2));
// console.log(sum(11,22));
// console.log(sum(3,5));
// console.log(sum(86,7));

console.log(sum(3, 5, 7)); // 8
console.log(sum(3));
console.log(sum());

// anonim function

//expression function
let hello = function () {
    return "Hello";
}

// let square = function(n){
//     return n**2;
// }
// console.log(hello());
// console.log(square(4));

//arrow function

// let square = (n)=>{
//     return n**2
// }

let square = (n) => n ** 2

console.log(square(7));
console.log(square(2));
console.log(square(3));

//callback functions

function cb(){
    return "I am callback function"
}
function mainFunction(callBack){
  return callBack()
}
console.log(mainFunction(cb));
console.log(mainFunction(function(){
    return "Hi, I am callback function"
}));
console.log(mainFunction(()=>{
    return "Hi, I am callback function"
}));
