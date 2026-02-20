const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router(); 
// /admin/addproduct => GET
router.get('/addproduct',adminController.getAddProduct);

// /admin/products => GET
router.get('/products');

// /admin/addproduct => POST
router.post('/addproduct',adminController.postAddProduct);

exports.routes = router;


