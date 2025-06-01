const express = require('express')
const app = express()

const mysql = require("mysql2")
const port = process.env.PORT || 8080

require("dotenv").config()

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.json())

// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: 'root',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD
});
// Connect to the database
connection.connect((err) =>{
    if (err) {
        console.error('error connecting:', err);
    }
    console.log("conntected to database!");
})

//get all products

app.get("/api/products", (req, res) =>{
    const query = "SELECT * FROM products";
    connection.query(query, (err, results) =>{
        if (err) {
            console.error(err);
        }

        res.status(200).json({
            data: results,
            message: "Products retrieved successfully"
        })
    })
})

//get data by id

app.get("/api/products/:id", (req, res)=>{
    const id = req.params.id
    const query = "SELECT * FROM products WHERE id = ?";
    connection.query(query, [id], (err, results) =>{
        if(err){
            console.error(err);
            express.json(err)
            return
        }

        if(results.length === 0){
            res.status(404).json({
                message: "Product not found"
                })
        }

        res.status(200).json({
            data: results[0],
            message: "Product retrieved successfully"
        })

    })
})

//delete data by id

app.delete("/api/products/:id", (req, res) =>{
    const id = req.params.id
    const query = "DELETE FROM products WHERE id = ?";
    connection.query(query, [id], (err, results) =>{
        if(err){
            console.error(err);
            res.json(err)
            return
        }

        
        if(results.length === 0){
            res.status(404).json({
                message: "Product not found"
                })
        }

        res.status(200).json({
            message: "Product deleted successfully",
            data: results
        })
    })
})

// edit data by id
app.put("/api/products/:id", (req, res)=>{
    const id = req.params.id
    const name = req.body.name
    const description = req.body.description

    const query = "UPDATE products SET name = ?, description = ? WHERE id = ?";

    connection.query(query,[name, description, id], (err, results) =>{
        if(err){
            console.error(err);
            res.json(err)
            return
        }

        res.status(200).json({
            message: "Product updated successfully",
            data: results
        })
    })
})

//add new data

app.post("/api/products", (req, res) =>{
    const name = req.body.name
    const description = req.body.description

    const query = "INSERT INTO products (name, description) VALUES (?, ?)";
    connection.query(query, [name, description], (err, results) =>{
        if(err){
            console.error(err);
            res.json(err)
            return
        }
        res.status(201).json({
            message: "Product created successfully",
            data: results
        })
    })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})