import dateConverter from "@/utils/dateConverter";

export default class Product {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id ;
        this.name = obj.nome;
        this.price = obj.valor || "";
        this.quantityInStock = obj.quantidadeEstoque || 0;
        this.registrationDate = obj.dataCadastro && dateConverter.applyISOMask(obj.dataCadastro);
        this.details = obj.observacao;
    }
    validModel(){
        return !!(this.name && this.price);
    }

    validModelForUpdating(){
        return !!(this.id && this.name);
    }
}