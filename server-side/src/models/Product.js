module.exports = class Product {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.name = obj.name;
        this.price = obj.price;
        this.quantityInStock = obj.quantityInStock;
        this.description = obj.description;
        this.picture = obj.picture;
        this.registrationDate = obj.registrationDate;
    }
}