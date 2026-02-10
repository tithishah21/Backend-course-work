const http = require('http');
//creates server
const bodyParser = require('body-parser');
const express = require('express');
//using express.js
const app = express(); 
const adminRoutes= require('./routes/admin');
const shopRoutes = require('./routes/shop');
//imported router object from admin.js

const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    //here we will not go to "../" as app.js is already in the root directory

    // enter any random url now and it will redirect to 404.html page
});

app.listen(3000); 