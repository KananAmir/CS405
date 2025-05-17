// 4) Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function. 
// Misalçün function-a gələn ilk arqumenti 2-ci arqument qədər qüvvətə yüksəldən 
// function - dəyərləri prompt vasitəsi ilə qəbul edib function-a göndərin)

function power(){
    let firstNumber = parseInt(prompt("enter first number"));
    let secondNumber = parseInt(prompt("enter second number"));

    let result = firstNumber ** secondNumber; 

    return result;
}

// console.log(power());


const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle"];
// #Slice out the middle IT company or companies from the array

let minddeIndex = (itCompanies.length - 1) / 2;
console.log(minddeIndex);

if(itCompanies.length % 2 == 1){
    console.log(itCompanies[minddeIndex]);
}else{
    console.log(itCompanies[Math.floor(itCompanies.length/2 - 1)], itCompanies[Math.ceil(itCompanies.length/2)]);
}


// # Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// racecar - polidromdur
// hello - polidrom deyil

function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr ? `${str} is a palindrome` : `${str} is not a palindrome`;
}

console.log(isPalindrome("racecar")); // racecar is a palindrome
console.log(isPalindrome("hello")); // hello is not a palindrome



