const http = require('http');
//creates server

const express = require('express');
//using express.js

const app = express(); 
//initialize a new framework for us where express.js will store and see a lot of things for us
//basically we create and express application

app.use((req,res, next) => {
    console.log("In the middleware");
    next();  
});
//user goes to the website, middleware runs first and console prints "middleware" and the goes to the next route
app.use((req,res, next) => {
    console.log("In another middleware");
    next();  
});

//next allows the argument to travel on the next req
app.get('/', (req, res) => {
    res.send("<h1>Server working</h1>");
});

//SO BASICALLY THE FLOW IS LIKE: request -> middleware -> route -> response
const server = http.createServer(app);

server.listen(3000); 