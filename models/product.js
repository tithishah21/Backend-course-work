const products = [];

module.exports = class Product {
    constructor(t){
        this.title = t;
    }

    save() {
        products.push(this);
        //this refers to the object created in our class
        //each product gets pushed in the products array
    }

    static fetchAll() {
        return this.products;
        //returns the names of all the products in the products array
    }
}