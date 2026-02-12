const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
//our root directory

const router = express.Router(); //express.js feature

const products = []; //will store the objects we enter

router.get('/addproduct',(req,res, next) => {
    console.log("In addproduct middleware");
    res.sendFile(path.join(rootDir,'views','addproduct.html')); 
    //instead of __dirname, using rootDir
});
//router.get is basically doing - whwnever we go to admin/addproduct , it will send us to a page addproduct.html.

router.post('/addproduct',(req,res,next)=>{
    // console.log("product runs / product middleware");
    // console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/'); 
});
//router.post does - when you click "Add Product", it will store the input that i typed "req.body" and print it into the server using console.log and then finally redirects us to / which shows shop.html

// module.exports = router;

exports.routes = router;
exports.products = products;