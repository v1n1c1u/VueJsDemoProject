import Profile from "./Profile";

export default class User{
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.name = obj.nome;
        this.email = obj.email;
        this.password = obj.senha;
        this.pic = obj.foto;
        this. profile = new Profile(obj.perfil);
        this.registrationDate = obj.dataCadastro;
    }
    validModelForLogin(){
        return !!(this.email && this.password);
    }

}