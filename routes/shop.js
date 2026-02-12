const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

router.get('/',(req,res, next) => {

    console.log('shop.js - ',adminData.products);
    
    res.sendFile(path.join(rootDir,'views', 'shop.html'));
    //join constructs a path by concatenating different segments
    //dirname is a global variable that holds the absolute path on our OS to this project folder

    //dirname will point to routes folder but views is a different folder
    // "../" will help it to redirect it to move up 1 folder
});

module.exports = router;