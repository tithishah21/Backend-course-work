const fs = require('fs');
const path =  require('path');
//instead of storing in an array,we will store the data in a file now 

// const products = [];

module.exports = class Product {
    constructor(t){
        this.title = t;
    }

    save() {
        const p = path.join(path.dirname(require.main.filename),'data','products.json');
        //defining a path to data folder and products.json file where our data will be stored


        // products.push(this);
        //this refers to the object created in our class
        //each product gets pushed in the products array
    }

    static fetchAll() {
        return products;
        //returns the names of all the products in the products array
    }
}