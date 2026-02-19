const Product = require('../models/product');

exports.getAddProduct = (req,res, next) => {
    res.render('admin/addproduct',
    {pageTitle: 'Add Product', 
    path:'/admin/addproduct', 
    activeAddProduct: true});
}

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/'); 
}