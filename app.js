const http = require('http');
//creates server
const bodyParser = require('body-parser');
const express = require('express');
//using express.js
const app = express(); 


app.set('view engine','pug'); //using 'pug' as any string
//app.set() allows to set any values globally on our express application, can also be keys and anything
//another way of sharing data across application

app.set('views','views');
//our default templating engine is set to pug and so the view engine is asked to look into 'views' folder (left in bracket)



const adminData= require('./routes/admin');
const shopRoutes = require('./routes/shop');
//imported router object from admin.js

const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
//It tells Express to serve any file inside the public folder directly over HTTP.
//and Express will return that file automatically — no route handler needed.
//So it turns your public folder into a “static files” folder (CSS, images, JS, etc).

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle: 'Page Not Found'});

    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    //here we will not go to "../" as app.js is already in the root directory

    // enter any random url now and it will redirect to 404.html page
});

app.listen(3000); 