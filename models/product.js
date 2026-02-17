const products = [];

module.exports = class Product {
    constructor(t){
        this.title = t;
    }

    save() {
        products.push(this);
        //this refers to the object created in our class
    }

    static fetchAll() {
        return this.products;
    }
}