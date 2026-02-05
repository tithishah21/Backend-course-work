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
    res.send("<h1>Server working woohoo!!!</h1> <i>Hello from express</i>");
    next();  
});
//SO BASICALLY THE FLOW IS LIKE: request -> middleware -> route -> response

// const server = http.createServer(app);
// server.listen(3000); 
app.listen(3000); // this will do what the above 2 lines will do