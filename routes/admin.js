const path = require('path');
const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router(); //express.js feature

router.get('/addproduct',productsController.getAddProduct);
//router.get is basically doing - whwnever we go to admin/addproduct , it will send us to a page addproduct.html.

router.post('/addproduct',productsController.postAddProduct);
//router.post does - when you click "Add Product", it will store the input that i typed "req.body" and print it into the server using console.log and then finally redirects us to / which shows shop.html

module.exports = router;