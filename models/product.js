const fs = require('fs');
const path =  require('path');
//instead of storing in an array,we will store the data in a file now 
// const products = [];

const p = path.join(path.dirname(require.main.filename),'data','products.json');

const getProductsFromFile =  cb => {
        fs.readFile(p, (err,fileContent) => {
            if(err){
                return cb([]);
            } else {
                cb(JSON.parse(fileContent.toString()));
            }
            
        })
}

module.exports = class Product {
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    save() {
        getProductsFromFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });  
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}
