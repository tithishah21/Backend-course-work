const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/',(req,res, next) => {
    // console.log("In another middleware");
    // res.send('<h1>Server working woohoo!!!</h1> <i>Hello from express</i>');
    res.sendFile(path.join(__dirname,'../','views', 'shop.html'));
    //join constructs a path by concatenating different segments
    //dirname is a global variable that holds the absolute path on our OS to this project folder

    //dirname will point to routes folder but views is a different folder
    // "../" will help it to redirect it to move up 1 folder
});

module.exports = router;