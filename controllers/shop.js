const Product = require('../models/product');

exports.getProducts = (req,res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            hasProducts: products.length > 0,
            pageTitle: 'Shop',
            path: '/'
        });  
    });
}
