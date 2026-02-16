const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

router.get('/',
    //from app.js, it knows that default templating engine is (say) pug so it will automatically look for .pug files in views folder i.e., shop.pug here

    // res.sendFile(path.join(rootDir,'views', 'shop.html'));
    //join constructs a path by concatenating different segments
    //dirname is a global variable that holds the absolute path on our OS to this project folder

    //dirname will point to routes folder but views is a different folder
    // "../" will help it to redirect it to move up 1 folder
);

module.exports = router;
