const { error } = require('console')
const express = require('express')
const { nanoid } = require("nanoid")
const { rateLimit } = require("express-rate-limit")
const cors  = require("cors")
require("dotenv").config()


const app = express()
const port = process.env.PORT || 8080


const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    limit: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
})


// const isAuth = true;

// const authMiddleware = (req, res, next)=>{
//     console.log(req.method)
//     if(!isAuth){
//        return res.json({
//             message: "You are not authenticated"
//         })
//     }

//     next()
// }


const verifyApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (apiKey === undefined) {
        return res.status(401).json({
            message: "You are not authenticated"
        })
    }

    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({
            message: "Invalid API Key"
        })

    }
    next()
}
//middleware
app.use(cors())
app.use(express.json())
// app.use(authMiddleware)

//api key middleware
app.use(verifyApiKey)

//limiter middleware
app.use(limiter)

const books = [
    {
        "id": "1",
        "title": "The Pragmatic Programmer",
        "author": "Andrew Hunt, David Thomas",
        "price": 45,
        "description": "A comprehensive guide to becoming a pragmatic and effective programmer.",

    },
    {
        "id": "2",
        "title": "Clean Code",
        "author": "Robert C. Martin",
        "price": 50,
        "description": "Learn how to write clean, maintainable, and scalable code.",

    },
    {
        "id": "3",
        "title": "1984",
        "author": "George Orwell",
        "price": 20,
        "description": "A dystopian novel depicting a totalitarian regime and its impact on society.",
    },
    {
        "id": "4",
        "title": "Sapiens: A Brief History of Humankind",
        "author": "Yuval Noah Harari",
        "price": 35,
        "description": "An exploration of the history and evolution of humankind.",

    },
    {
        "id": "5",
        "title": "Atomic Habits",
        "author": "James Clear",
        "price": 28,
        "description": "A practical guide to building good habits and breaking bad ones.",
    },
    {
        "id": "6",
        "title": "The Subtle Art of Not Giving a F*ck",
        "author": "Mark Manson",
        "price": 22,
        "description": "A counterintuitive approach to living a good life.",
    },
    {
        "id": "7",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "price": 18,
        "description": "A story of wealth, love, and the American dream in the 1920s.",
    },
    {
        "id": "8",
        "title": "Guns, Germs, and Steel",
        "author": "Jared Diamond",
        "price": 30,
        "description": "A historical analysis of the factors that shaped the modern world, including geography, culture, and biology.",
    }
]

// const students = [
//     { id: 1, name: 'John', age: 20 },
//     { id: 2, name: 'Jane', age: 22 },
//     { id: 3, name: 'Bob', age: 21 },
// ]

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/message', (req, res) => {
//     res.send({
//         message: "CS405"
//     })
// })

// app.get("/students", (req, res) => {
//     res.json({
//         data: students
//     })
// })



//get all data
app.get("/books", (req, res) => {
    res.status(200).json({
        data: books,
        message: "success",
        error: null
    })
})

// get data bv id
app.get("/books/:id", (req, res) => {
    const id = req.params.id

    const book = books.find((book) => book.id === id)

    if (!book) {
        return res.status(404).json({
            message: "book not found",
            data: null
        })
    }

    res.status(200).json({
        data: book,
        message: "success",
    })

})


//delete data by id
app.delete("/books/:id", verifyApiKey, (req, res) => {
    const id = req.params.id
    const index = books.findIndex((q) => q.id === id)
    if (index === -1) {
        return res.status(404).json({
            message: "book not found",
            data: null
        })
    }

    const deleteBook = books.splice(index, 1)

    res.status(200).json({
        data: deleteBook,
        message: "book deleted succesfully!",
    })
})

//add new data
app.post("/books", (req, res) => {

    if (req.body.title === undefined
        || req.body.author === undefined
        || req.body.price === undefined
        || req.body.description === undefined) {
        return res.status(400).json({
            message: "invalid request",
        })
    }
    const newBook = {
        id: nanoid(),
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description
    }

    books.push(newBook)

    res.status(201).json({
        message: "book created successfully!",
        data: newBook
    })
})


//update data by id

app.put("/books/:id", (req, res) => {
    const id = req.params.id
    const index = books.findIndex((q) => q.id === id)
    if (index === -1) {
        return res.status(404).json({
            message: "book not found!",
        })
    }
    if (req.body.title === undefined || req.body.author === undefined || req.body.price === undefined || req.body.description === undefined) {
        return res.status(400).json({
            message: "invalid request",
        })
    }
    const updatedBook = {
        id: id,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description
    }

    books[index] = updatedBook

    res.status(200).json({
        message: "book updated successfully!",
        data: updatedBook
    })


})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}, url: http://localhost:${port}/`)
})
