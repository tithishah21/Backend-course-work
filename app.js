const http = require('http');
//creates server

const bodyParser = require('body-parser');

const { engine } = require('express-handlebars');
//for installng handlebars


const errorController = require('./controllers/error');
//controller for 404 page 

const express = require('express');
//using express.js
const app = express(); 

// app.engine('handlebars', engine({ defaultLayout: 'main-layout' }));
// app.set('view engine','handlebars');
//for using handlebars

app.set('view engine','ejs')
// app.set('view engine','pug'); //using 'pug' as any string
//app.set() allows to set any values globally on our express application, can also be keys and anything
//another way of sharing data across application

app.set('views','views');
// view engine (could be pug or ejs or handlebars) will look into the views folder

const adminRoutes= require('./routes/admin');

const shopRoutes = require('./routes/shop');
//imported router object from admin.js

const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
//It tells Express to serve any file inside the public folder directly over HTTP.
//and Express will return that file automatically — no route handler needed.
//So it turns your public folder into a “static files” folder (CSS, images, JS, etc).

app.use('/admin',adminRoutes.routes);

app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000); 
