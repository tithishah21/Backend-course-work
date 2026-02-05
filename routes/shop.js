const express = require('express');
const router = express.Router();

router.use('/',(req,res, next) => {
    console.log("In another middleware");
    res.send('<h1>Server working woohoo!!!</h1> <i>Hello from express</i>');
    next();  
});

module.exports = router;