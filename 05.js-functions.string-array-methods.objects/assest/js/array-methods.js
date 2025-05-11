const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products



const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies


//pop, push, shift, unshift

// webTechs.pop()
// webTechs.push("Bootstrap")
// webTechs.shift()
// webTechs.unshift("Git")

//splice

// webTechs.splice(2, 1)
// webTechs.splice(2, 3)
// webTechs.splice(2, 1, "bootstrap")

webTechs.splice(1, 0, "Gihtub")
console.log(webTechs);

const fruits = ['banana', 'orange', 'mango', "orange", 'lemon', "orange", "mango"] // array of strings, fruits


console.log(fruits.indexOf("orange"));
console.log(fruits.lastIndexOf("orange"));


const nums1 = [1,2,3]
const nums2 = [4,5,6]

// const combinedNums = nums1.concat(nums2)
const combinedNums = [...nums1,...nums2]
console.log(combinedNums);


console.log(fruits.includes("lemon"));//true
console.log(fruits.includes("avacado"));//false



const numbers = [10, 23, 45, 34, 76, 55]

//foreach

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);   
// }

// numbers.forEach((number)=>{
//     console.log(number);
// })
let sum = 0
numbers.forEach((number)=>{
    sum+=number
})

console.log(sum);
console.log("average:", sum / numbers.length);


//map

let newNumbers = numbers.map((item)=>{
    return item * 2
})

console.log(newNumbers);


console.log([1,2,3,4].map((item)=>item**2));


const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

//["FIN", "DEN", "SWE", "NOR", "ICE"]

const result = countries.map((c)=>c.toUpperCase().slice(0, 3))

console.log(result);

let arr = []
countries.forEach((item)=>{
    arr.push(item.toUpperCase().slice(0,3))
})
console.log(arr);



const employees = [
    {
        id: 1,
        name: "Ali Mammadov",
        position: "Frontend Developer",
        salary: 1200,
        isActive: true,
        email: "ali.mammadov@example.com",
        hireDate: "2022-05-15",
        department: "IT"
    },
    {
        id: 2,
        name: "Leyla Ahmadova",
        position: "Backend Developer",
        salary: 1500,
        isActive: true,
        email: "leyla.ahmadova@example.com",
        hireDate: "2021-11-02",
        department: "IT"
    },
    {
        id: 3,
        name: "Tunar Isgandarov",
        position: "UI/UX Designer",
        salary: 1100,
        isActive: false,
        email: "tunar.isgandarov@example.com",
        hireDate: "2020-08-25",
        department: "Design"
    },
    {
        id: 4,
        name: "Sevda Aliyeva",
        position: "Project Manager",
        salary: 2000,
        isActive: true,
        email: "sevda.aliyeva@example.com",
        hireDate: "2019-01-10",
        department: "Management"
    },
    {
        id: 5,
        name: "Rashad Qurbanov",
        position: "QA Engineer",
        salary: 1000,
        isActive: false,
        email: "rashad.qurbanov@example.com",
        hireDate: "2023-03-18",
        department: "Quality Assurance"
    },
    {
        id: 6,
        name: "Nigar Huseynli",
        position: "DevOps Engineer",
        salary: 1800,
        isActive: true,
        email: "nigar.huseynli@example.com",
        hireDate: "2021-06-30",
        department: "Infrastructure"
    },
    {
        id: 7,
        name: "Elvin Suleymanov",
        position: "Data Analyst",
        salary: 1300,
        isActive: true,
        email: "elvin.suleymanov@example.com",
        hireDate: "2020-12-12",
        department: "Analytics"
    },
    {
        id: 8,
        name: "Gunel Rahimli",
        position: "HR Specialist",
        salary: 950,
        isActive: false,
        email: "gunel.rahimli@example.com",
        hireDate: "2018-09-20",
        department: "Human Resources"
    },
    {
        id: 9,
        name: "Murad Hajiyev",
        position: "Mobile Developer",
        salary: 1400,
        isActive: true,
        email: "murad.hajiyev@example.com",
        hireDate: "2022-07-07",
        department: "Mobile"
    },
    {
        id: 10,
        name: "Aygun Abbasova",
        position: "System Administrator",
        salary: 1250,
        isActive: true,
        email: "aygun.abbasova@example.com",
        hireDate: "2019-10-01",
        department: "Infrastructure"
    }
];


console.log(employees);


// console.log(employees.find((item)=>item.salary > 1200));
console.log(employees.filter((item)=>item.salary > 1200));


const sortBySalaryAsc = employees.toSorted((a,b)=>a.salary - b.salary)
const sortBySalaryDesc = employees.toSorted((a,b)=>b.salary - a.salary)

console.log(sortBySalaryAsc);
console.log(sortBySalaryDesc);
