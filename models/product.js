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
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });

        // products.push(this);
        //this refers to the object created in our class
        //each product gets pushed in the products array
    }

    static fetchAll(cb) {
        const p = path.join(path.dirname(require.main.filename),'data','products.json');
        fs.readFile(p, (err,fileContent) => {
            if(err){
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })
        
        //returns the names of all the products in the products array
    }
}
