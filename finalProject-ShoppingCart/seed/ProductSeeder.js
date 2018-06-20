var Product = require('../models/product');

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/shopping');

var products = [

    new Product({
        imagePath: 'https://images.freeimages.com/images/large-previews/295/apples-1322925.jpg',
        name: 'Apple',
        description: 'Fruit',
        price: .99,
        quantity: 10
    }),
    new Product({
        imagePath: 'https://images.freeimages.com/images/large-previews/7dd/bananas-1326090.jpg',
        name: 'Banana',
        description: 'Fruit',
        price: 7.99,
        quantity: 8
    }),
    new Product({
        imagePath: 'https://images.freeimages.com/images/large-previews/7fc/strawberry-1322981.jpg',
        name: 'Strawberries',
        description: 'Fruit',
        price: 4.99,
        quantity: 2
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71ZAi4bfbrL._SL1294_.jpg',
        name: 'Yogurt',
        description: 'Fruit',
        price: 1.99,
        quantity: 15
    }),
    new Product({
        imagePath: 'https://dairygood.org/~/media/shared/content/2016/swiss.jpg?la=en&hash=74AD4AFE07B2BE2CC16A891A0FC7DB54180CBDB7',
        name: 'Cheese',
        description: 'Fruit',
        price: 6.99,
        quantity: 7
    })

];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

