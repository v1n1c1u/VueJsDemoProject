export default class Product {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id ;
        this.name = obj.nome;
        this.price = obj.valor || 0;
        this.quantityInStock = obj.quantidadeEstoque || 0;
        this.registrationDate = obj.dataCadastro;
        this.details = obj.observacao;
    }
    validModel(){
        return !!(this.name && this.price);
    }

    validModelForUpdating(){
        return !!(this.id && this.name);
    }
}