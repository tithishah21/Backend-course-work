const products = []; 

exports.getAddProduct = (req,res, next) => {

    res.render('addproduct',
    {pageTitle: 'Add Product', 
    path:'/admin/addproduct', 
    activeAddProduct: true});
}

exports.postAddProduct = (req,res,next)=>{
    products.push({title: req.body.title});
    res.redirect('/'); 
}