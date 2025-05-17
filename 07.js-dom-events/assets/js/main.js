console.log("Hello World!");


const clickMeBtn = document.querySelector("#click-me");

clickMeBtn.addEventListener("click", (event)=>{
    // alert("Button Clicked!");
    console.log(event.target); 
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Clicked!";
})

// window.addEventListener("click", (event)=>{
//     window.alert("Window Clicked!");
// })

const searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", (event)=>{
    console.log(event.target.value);
})


const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    console.log(event.target);
    
    if(nameInput.value === "" || emailInput.value === "" || passwordInput.value === "" ){
        alert("Please fill all the fields");
        event.target.reset();
        return;
    }
    
    const user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    console.log(user); 

    event.target.reset();
})