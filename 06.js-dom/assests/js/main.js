// DOM - document object model
// BOM - browser object model

// console.log(document);
// console.log(window);

// window.alert("hello")
// let bool = window.confirm("Are u sure to delete?");

// console.log(bool);


// let username = prompt("enter ur name here, pls!!", "Mr Jhon")

// console.log(username);


console.log(document.head);
console.log(document.body);


//selectors

// const heading = document.getElementById("heading")
// const heading = document.querySelector("#heading")
const text = document.querySelector(".text")

// const allTexts = document.querySelectorAll(".text")
const allTexts = document.getElementsByClassName("text")
console.log(Array.from(allTexts));



//create element

const newHeading = document.createElement("h2");
const newText = document.createElement("p");

newText.style.color = "red"
newText.style.fontSize = "32px"
newHeading.textContent = "Hello, World!"
newText.textContent = "cs405 cyber security"

console.log(newHeading);


const container = document.querySelector(".container")
container.append(newHeading, newText)


const students = ["Afar", "Kanan", "Gulnur", "Ali", "Ahad"]

const studentList = document.querySelector(".student-list")
students.forEach((s)=>{
    const listElemenet = document.createElement("li");
    listElemenet.textContent = s
    listElemenet.addEventListener("click", (e)=>{
        // console.log(e.target);
        e.target.remove()
        
    })

    studentList.appendChild(listElemenet)
})


//events

const clickMe = document.querySelector("#click-me")

clickMe.addEventListener("click", (event)=>{
    // console.log("you clicked!");
    // window.alert("cliked!!")
   console.log(event.target);
   
})


// const link = document.createElement("a")

// link.textContent = "link to website"

// link.href = "https://www.google.com"

// link.setAttribute("href", "https://www.google.com")
// link.setAttribute("title", "google")

// document.body.append(link) 



//innerHtml

const carList = document.querySelector(".car-list")

carList.innerHTML = `
        <li>BMW</li>
        <li>Mercedes</li>
`

const textInput = document.querySelector(".text-input")
const addBtn = document.querySelector(".add")
const list = document.querySelector(".list")

// addBtn.addEventListener("click", ()=>{
//     // console.log(textInput.value);

//     const li = document.createElement("li")
//     li.textContent = textInput.value
//     list.appendChild(li)
// })


function sanitizeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

addBtn.addEventListener("click", ()=>{
    // console.log(textInput.value);

  
    list.innerHTML += `
        <li>${sanitizeHTML(textInput.value)}</li>
    `
})

// xss atacks