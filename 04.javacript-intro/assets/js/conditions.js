//truth and falsy values
// falsy values: 0, -0, '', "", ``, false, null, undefined, NaN
//truth: 15, -15, "hello", " ", [], {}
// conditions

// if(condition){
//     // code to be executed if condition is true
// }

let user = {
    name: 'John Doe',
    age: 27,
    occupation: 'Software Engineer',
    email:"jhon_doe@gmail.com",
    balance: 5
}

if(user.age >= 18){
    console.log(`${user.name}, you can vote`); 
}else{
    console.log(`${user.name}, you are not eligible to vote`);
}


let number = 0

if(number>0){
    console.log("number is positive");
}else if(number <0){
    console.log("number is negative");
}else {
    console.log("number is zero");
}



if(user.age >= 18 && user.balance > 8){
    console.log(`${user.name} has sufficient balance to bun a ticket and ur age is okay!`);
}else{
    console.log(`${user.name} does not have sufficient balance to buy a ticket or ur age is not`);
}

// if(user.age >= 18){
//     if(user.balance > 8){
//         console.log("u can buy a ticket");
//     }else{
//         console.log("u can't buy a ticket");
//     }
// }else{
//     console.log("u are little yet!");
// }

// switch case

let weekDay = 0;

switch (weekDay) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;

    default:
        console.log("Invalid day");
        break;
}