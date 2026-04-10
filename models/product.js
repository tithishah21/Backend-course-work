const db = require('../util/database');
const Cart = require('./cart');

module.exports = class Product {
    constructor(title, imageUrl, description, price, id){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.id = id;
    }

    save() {
        if (this.id) {
            return db.execute(
                'UPDATE products SET title = ?, price = ?, description = ?, imageUrl = ? WHERE id = ?',
                [this.title, this.price, this.description, this.imageUrl, this.id]
            );
        }

        return db.execute(
            'INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
            [this.title, this.price, this.description, this.imageUrl]
        );
    }

    static deleteById(id){
        return db.execute('DELETE FROM products WHERE id = ?', [id]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id) {
        return db.execute('SELECT * FROM products WHERE id = ?', [id]);
    }
}
