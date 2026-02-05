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

app.use(adminRoutes);
app.use(shopRoutes);
app.listen(3000); 