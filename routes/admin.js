const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router(); 
// /admin/addproduct => GET
router.get('/addproduct',adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/addproduct => POST
router.post('/addproduct',adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);
router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product',adminController.postDeleteProduct);

exports.routes = router;
