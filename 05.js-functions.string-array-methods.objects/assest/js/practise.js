// 1) Ad və soyad qəbul edən bir funksiya yazın. Əlavə olaraq "Salam, [Ad Soyad]!" 
// formatında cümlə qaytarsın.
function greeting(ad, soyad){
	
}

greeting("jhon", "doe")

// 2) Verilmiş ədədi faktoriala çevirən funksiya yazın (məsələn: factorial(5) → 120).

function calcFactorial(n){
    let result = 1
    for (let i = 1; i <=n; i++){
        result = result * i
    }

    return result
}

console.log(calcFactorial(3));// 6
console.log(calcFactorial(5) );//120

// 3) Verilmiş ədədin tək və ya cüt olduğunu müəyyən edən funksiya yazın.
// const findOddOrEven = (number)=>{
//     if (number % 2 === 0) {
//         return "cüt"
//     }else{
//         return "tək"
//     }
// }
const findOddOrEven = (number)=>{
   return number % 2 === 0 ? "cüt" : "tək"
}

// 4) Verilmiş cümlədə neçə ədəd boşluq olduğunu tapan funksiya yazın.

const countSpaces = (str) =>{
    return str.split(" ").length - 1
}


// 5) reverseString("salam") funksiyası yazın. Verilmiş string-i tərsinə çevirsin.
function reverseString(sentece){
    return sentece.split("").reverse().join("")
}

console.log(reverseString("aaa bbb ccc")); // "ccc bbb aaa"

// 6) capitalize funksiyası yazın. Verilmiş cümlədəki bütün sözlərin ilk hərfini böyük hərf etsin.
// Giriş: "salam dunya" → Çıxış: "Salam Dunya"

function capitalizeEachWord(sentence){
    let words = sentence.split(" ");
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}

console.log(capitalizeEachWord("hello world") ); //Hello World
