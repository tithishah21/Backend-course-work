const http = require('http'); //creates server

const bodyParser = require('body-parser');

const { engine } = require('express-handlebars'); //for installng handlebars

const errorController = require('./controllers/error'); //controller for 404 page 

const sequelize = require('./util/database');

const Product = require('./models/product');

const User = require('./models/user');

const express = require('express'); //using express.js

const app = express(); 

// app.engine('handlebars', engine({ defaultLayout: 'main-layout' }));
// app.set('view engine','handlebars');
//for using handlebars

app.set('view engine','ejs')
// app.set('view engine','pug'); //using 'pug' as any string
//app.set() allows to set any values globally on our express application, can also be keys and anything
//another way of sharing data across application

app.set('views','views'); // view engine (could be pug or ejs or handlebars) will look into the views folder

const adminRoutes= require('./routes/admin');

const shopRoutes = require('./routes/shop');//imported router object from admin.js

// db.execute('SELECT * FROM products')
//   .then(([rows, fields]) => {
//     console.log(rows);
//   })
//   .catch(err => {
//     console.log(err);
//   });


const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
//It tells Express to serve any file inside the public folder directly over HTTP.
//and Express will return that file automatically — no route handler needed.
//So it turns your public folder into a “static files” folder (CSS, images, JS, etc).

app.use('/admin',adminRoutes.routes);

app.use(shopRoutes);

app.use(errorController.get404);


// ---- DEFINING ASSOCITAION ----
Product.belongsTo(User,{constraints: true,onDelete:'CASCADE'}); //it means that if we delete user, then anything related with user aslo gets deleted like orders etc
User.hasMany(Product);


//syncs your models to database
sequelize.sync(
    // {force: true} //for overwriting tables
)
.then(result=>{
    return User.findByPk(1);
})
.then(user => {
    if(!user){
        return User.create({name: 'Tithi',email:'shahtithi21@gmail.com'});
    }
    return user;
})
.then(user => {
    // console.log(user);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
}); 

 
