const express = require('express')
const { nanoid } = require("nanoid")
const { rateLimit } = require("express-rate-limit")
const cors = require("cors")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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


const verifyApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    console.log("apiKey", apiKey);
    console.log("env api key", process.env.API_KEY);

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


const verifyToken = (req, res, next) => {
   try {
     const HEADERS = req.headers["token"]

    const token = HEADERS && HEADERS.split(" ")[1]
    console.log("token", token);

    if (!HEADERS) {
        return res.status(401).json({
            message: "Unauthorized! Token is required",
            data: null
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (decoded.role !== "admin") {
        return res.status(401).json({
            message: "Unauthorized! You are not an admin",
            data: null
        })
    }

    next()
   } catch (error) {
    res.json(error)
    
   }
}


const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
}
//middleware
app.use(cors(corsOptions))
app.use(express.json())
// app.use(authMiddleware)

//limiter middleware
// app.use(limiter)


const users = [
    {
        id: "11",
        username: "ali_123",
        email: "ali@gmail.com",
        password: "Ali123",
        role: "user" // or admin
    },
]

//register

app.post("/api/register", async (req, res) => {
    if (req.body.username === undefined || req.body.email === undefined || req.body.password === undefined) {
        return res.status(400).json({
            message: "Please fill in all fields"
        })
    }
    const foundUser = users.find((q) => {
        return q.username === req.body.username || q.email === req.body.email
    })

    console.log(foundUser);

    if (foundUser) {
        res.status(400).json({
            message: "Email or username already exists"
        })
    }


    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // console.log(hashedPassword);

    const newUser = {
        id: nanoid(),
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        role: "admin"
    }

    users.push(newUser)

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    })
})


//login
app.post("/api/login", async (req, res) => {

    if (req.body.email === undefined || req.body.password === undefined) {
        return res.status(400).json({
            message: "Please fill in all fields"
        })
    }
    const foundUser = users.find((q) => {
        return q.email === req.body.email
    })

    if (!foundUser) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }



    const isValidPassword = await bcrypt.compare(req.body.password, foundUser.password)

    if (!isValidPassword) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign({
        username: foundUser.username,
        role: foundUser.role,
        email: foundUser.email
    }, process.env.JWT_SECRET,
        {
            expiresIn: 1 * 60
        })

    // console.log("token", token);


    res.status(200).json({
        message: "User logged in successfully",
        username: foundUser.username,
        token: token
    }
    )
})

//get all users
app.get("/api/users", (req, res) => {
    res.status(200).json({
        data: users,
        message: "success",
        error: null
    })
})

// delete user by id
app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id
    const index = users.findIndex((q) => q.id === id)
    if (index === -1) {
        return res.status(404).json({
            message: "user not found",
            data: null
        })
    }

    const deletedUser = users.splice(index, 1)

    res.status(200).json({
        data: deletedUser,
        message: "user deleted succesfully!",
    })
})


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

//api key middleware
// app.use(verifyApiKey)

//get all data
app.get("/api/books", verifyToken, (req, res) => {
    res.status(200).json({
        data: books,
        message: "success",
        error: null
    })
})

// get data bv id
app.get("/api/books/:id", (req, res) => {
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
app.delete("/api/books/:id", verifyApiKey, verifyToken, (req, res) => {
    try {

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
    } catch (error) {
        res.json(error)
    }
})

//add new data
app.post("/api/books", verifyToken, (req, res) => {

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

app.put("/books/:id", verifyToken, (req, res) => {
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
