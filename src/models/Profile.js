export default class Profile {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.description = obj.descricao;
    }
}