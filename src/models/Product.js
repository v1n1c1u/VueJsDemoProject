export default class Product {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id ;
        this.name = obj.name;
        this.price = obj.price || 0;
        this.quantityInStock = obj.quantityInStock || 0;
        this.registrationDate = obj.registrationDate;
    }
}