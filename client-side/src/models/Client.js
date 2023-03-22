export default class Client {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id ;
        this.name = obj.name;
        this.email = obj.email;
        this.registrationDate = obj.registrationDate;
    }

    validModel(){
        return !!(this.name && this.email);
    }

    validModelForUpdating(){
        return !!(this.id && this.name);
    }
}