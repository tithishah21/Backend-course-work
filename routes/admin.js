const path = require('path');
const express = require('express');
const router = express.Router(); //express.js feature

router.get('/addproduct',(req,res, next) => {
    console.log("In add product middleware");
    res.sendFile(path.join(__dirname,'../','views','addproduct.html'));
    // next();  
});

router.post('/addproduct',(req,res,next)=>{
    console.log("product runs / product middleware");
    console.log(req.body);
    res.redirect('/'); 
});

module.exports = router;