const Product = require('../models/product');

// const products = []; 

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

exports.getProducts = (req,res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            hasProducts: products.length > 0,
            pageTitle: 'Shop',
            path: '/'
        });  
    });
    
}
