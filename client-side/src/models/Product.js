import dateConverter from "@/utils/dateConverter";

export default class Product {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id ;
        this.name = obj.name;
        this.price = obj.price || "";
        this.quantityInStock = obj.quantityInStock || 0;
        this.registrationDate = obj.registrationDate && dateConverter.applyISOMask(obj.registrationDate);
        this.details = obj.description;
    }
    validModel(){
        return !!(this.name && this.price);
    }

    validModelForUpdating(){
        return !!(this.id && this.name);
    }
}