exports.getAddProduct = (req,res, next) => {

    res.render('addproduct',
    {pageTitle: 'Add Product', 
    path:'/admin/addproduct', 
    activeAddProduct: true});
}