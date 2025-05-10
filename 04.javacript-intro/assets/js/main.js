console.log("hello js!!")
// window.alert("salamlar")
// document.write("test")

//variables in js

// let, const, var

// console.log(username); // error

let email;
email = "jhon@code.edu.az"
let username = "john";
username = "jane"
let age = 23;
// console.log(username);
console.log("username:", username);
console.log("age:", 23);

let character = "a"
let isOnline = true

const PI = 3.14;

// let str = "hello"
// let str = 'hello'
// let str = `hello`

console.log(`Salam, ${username}`);


// PI = 14 //error


// let a; //variable desclearation
let a = 15; //variable initialisation


let b;

console.log(b); //undefined

let user = null

console.log(user);

console.log(typeof "ali"); //string
console.log(typeof 0); // number
console.log(typeof false); // boolean
console.log(typeof undefined) //undefined 
console.log(typeof null) //object 


//DATA TYPES

// primitive: string, number, boolean, bigint, null, undefined, symbol
// referance (non primitive): object, array, function

//arrays (list, massiv)

const numbers = [1, 2, 3, 4, 5];
const colors = ["red", "yellow", "blue", "green", "black"];
const mixed = [1, "ali", true, null, undefined]

console.log(colors);
console.log("length", colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]); // black
console.log(colors[colors.length]); // undefined

//objects

// let firstName = "Afiq";
// let lastName = "Haji";

const student = {
    firstName: "Afiq",
    lastName: "Haji",
    age: 20,
    "qan qrupu": "2rh+",
    isGraduated: false,
    address: {
        street: "Jalan 1",
        city: "Kuala Lumpur",
    },
    hobbies: ["football", "basketball", "reading"],
}

// console.log(student);
console.log(student.lastName);
console.log(student["qan qrupu"]);
console.log(student.hobbies);
console.log(student["hobbies"]);
