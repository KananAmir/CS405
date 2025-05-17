// API - application programming interface
// http request methods


//promise
// states: pending, fulfilled, rejected

// const promise = new Promise((resolve, reject) => {
//     const success = false;
//     if (success) {
//         resolve('Promise resolved successfully');
//     } else {
//         reject('Promise rejected');
//     }
// })

// console.log(promise);


// console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

// blocks: then, catch, finally


// fetch("https://northwind.vercel.app/api/categories")
//     .then((response) => {
//         //  if (!response.ok) {
//         //     throw new Error("Error fetching data");
//         // }
//         return response.json();
//     }).then((data) => {
//        console.log(data);
//     }
//     ).catch((error) => {
//         console.error("Error:", error);
//     }).finally(() => {
//         console.log("finally");
//     }   
//     );


// async await

// async function square (number){
//     return number ** 2
// }

// console.log(square(2)); // 4
// console.log(square(5)); // 25

// square(2).then((result) => {
//     console.log(result);
// }
// );



// async function getData(endpoint){
//   const response = await fetch (`https://northwind.vercel.app/api/${endpoint}`)
//   const data = await response.json()
//     console.log(data);

// }

// getData("categories")
// getData("suppliers")
// getData("products")

// console.log(1)
// console.log(2)
// console.log(3)


// http request methods: get, post, put, delete, patch
// CRUD - create, read, update, delete


async function getDataByI(endpoint, id) {
    const response = await fetch(`https://northwind.vercel.app/api/${endpoint}/${id}`, {
        method: "GET"
    })
    const data = await response.json()
    console.log(data);
    

}
// getDataByI("categories", 5)



const tBody = document.querySelector("tbody");

function renderTable(data) {
    tBody.innerHTML = "";
    data.forEach((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>
                <button class="delete" id="${item.id}">Delete</button>
            </td>
        `;
        tBody.appendChild(tr);
    });

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", async (e) => {

            let bool = window.confirm("Are you sure you want to delete this item?")
            if (!bool) {
                return
            }
            const id = e.target.id;
            await fetch(`https://northwind.vercel.app/api/categories/${id}`, {
                method: "DELETE",
            });
            getData("categories");
        });
    });
}


async function getData(endpoint) {
    const response = await fetch(`https://northwind.vercel.app/api/${endpoint}`, {
        method: "GET"
    })
    const data = await response.json()
    renderTable(data);

}
getData("categories")


