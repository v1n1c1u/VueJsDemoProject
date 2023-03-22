
module.exports = class Client {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.name = obj.name;
        this.SSN = obj.SSN;
        this.email = obj.email;
        this.phone = obj.phone;
        this.userId = obj.userId;
        this.registrationDate = obj.registrationDate;
    }
}