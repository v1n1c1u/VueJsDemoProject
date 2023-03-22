const Product = require('../models/Product.js');
var currentId = 2;

var productsList = [
    new Product({
        id:1,
        name:"Sneakers",
        quantityInStock: 10,
        price: 200.0,
        registrationDate: new Date().toISOString(),
        description: "Original product"
    }),
    new Product({
        id:2,
        name:"Barcelona Jersey",
        quantityInStock: 50,
        price: 280.0,
        registrationDate: new Date().toISOString(),
        description: "Original product"
    })
];

function findAll(){
    return productsList;
}

function findById(id){
    return productsList.find(p => p.id == id);
}

function register(obj){
    var product = new Product(obj);
    currentId++;
    product.id = currentId;
    productsList.push(product);

    return product;
}

function update(product){
    var index = productsList.findIndex(p => p.id == product.id);
    
    if(index < 0){
        return;
    }

    productsList.splice(index, 1, product);
    return product;
}

function deleteById(id){
    var index = productsList.findIndex(p => p.id == id);
    if(index < 0){
        return;
    }

    // Deleta de dentro do array a posicição especifica
    productsList.splice(index, 1);
}


module.exports = {
    findAll,
    findById,
    register,
    update,
    deleteById
}