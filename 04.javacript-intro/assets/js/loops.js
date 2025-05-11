// for, while, do while

// for(start, condition, steps){
//     // code to be executed
// }


for (let i = 1; i <= 10; i = i + 2) {
    console.log(i);
}

// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 1){
//         console.log(i);   
//     }
// }

let str = "hello"

// console.log(str.length);
// console.log(str[0]);
// console.log(str[str.length-1]);

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

let sampleText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo provident necessitatibus tempora eum ab modi?`

let count = 0
for (let i = 0; i < sampleText.length; i++) {
    if (sampleText[i] === " ") {
        count = count + 1
    }
}

console.log(count);


const scores = [98, 75, 100, 57, 30]

// let sum = 0
// for (let i = 0; i < scores.length; i++) {
//     sum = sum + scores[i]
// }
let sum = scores[0]
for (let i = 1; i < scores.length; i++) {
    sum = sum + scores[i]
}

console.log("sum", sum);
let average = sum / scores.length

console.log("average", average);


// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


//string is inmutable
let username = "madina"
// username[3] = "h" // impossible

let reverseUsername = ""
for (let i = username.length - 1; i >= 0; i--) {
    reverseUsername += username[i]
}

console.log(reverseUsername);


//infinite loop

// for(;;){
//     console.log("salam"); 
// }
let n = 0
for (; ;) {
    console.log(n++);
    if (n === 1000) {
        break;
    }
}

let num = 1000
//while
// while(num<=100){
//     console.log("aaa"); 
//     num++
// }


do {
    console.log("hello");
    num++
} while (num <= 100)


function printUserInfo(user) {
    console.log(user);
}


const nums = [23, 2, 177, 88, 64]

// console.log(Math.max(...nums));

// let MAX = nums[0]
// for (let i = 1; i < nums.length; i++) {
//     if(nums[i] > MAX){
//         MAX = nums[i]
//     }
// }

// console.log("MAX", MAX);

let MIN = nums[0]
for (let i = 1; i < nums.length; i++) {
    if(nums[i] < MIN){
        MIN = nums[i]
    }
}

console.log("MIN", MIN);
