const http = require('http');
//creates server
const bodyParser = require('body-parser');
const express = require('express');
//using express.js
const app = express(); 
const adminRoutes= require('./routes/admin');
const shopRoutes = require('./routes/shop');
//imported router object from admin.js
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('page not found');

});

app.listen(3000); 