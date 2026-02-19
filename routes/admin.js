const path = require('path');
const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router(); 
// /admin/addproduct => GET
router.get('/addproduct',productsController.getAddProduct);

// /admin/products => GET
router.get('/products');

// /admin/addproduct => POST
router.post('/addproduct',productsController.postAddProduct);

exports.routes = router;
