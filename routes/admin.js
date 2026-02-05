
const express = require('express');
const router = express.Router(); //express.js feature

router.get('/addproduct',(req,res, next) => {
    console.log("In add product middleware");
    res.send('<form action="/admin/addproduct" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // next();  
});

router.post('/addproduct',(req,res,next)=>{
    console.log("product runs / product middleware");
    console.log(req.body);
    res.redirect('/'); 
});

module.exports = router;