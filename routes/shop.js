const express = require('express');
const router = express.Router();

router.get('/',(req,res, next) => {
    console.log("In another middleware");
    res.send('<h1>Server working woohoo!!!</h1> <i>Hello from express</i>');
     
});

module.exports = router;