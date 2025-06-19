const express = require('express');
const app = express()
const port = 1000
const htmlPage = "/html"

const allStudents = [
    {name: "John", age: 20, course: "Computer Science"},
    {name: "Jane", age: 22, course: "Mathematics"},
    {name: "Mike", age: 21, course: "Physics"},
    {name: "Sara", age: 23, course: "Chemistry"},
    {name: "Tom", age: 19, course: "Biology"},
    {name: "Lucy", age: 24, course: "English Literature"},
]

app.get('/api', (req, res)=> {
    try {
        res.status(201).json({message: allStudents})
    } catch (error) {
        res.status(503).json({message: error})
    }
})

app.get("/", (req, res) => {
    res.send("Welcome to Node")
})

app.get("/dashboard", (req, res) => {
    res.send("Welcome to my dashboard")
})

app.get(htmlPage, (req, res) => {
    console.log('__dirname');
    res.sendFile(__dirname+'/index.html')
    // or
    // res.send(`${__dirname}/index.html`)
})

app.listen(port, () => {
    console.log("The port is running on 1000");
})
