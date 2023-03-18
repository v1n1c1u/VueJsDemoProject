import api from'./api';

function findAll(){
    return new Promise((resolve, reject) => {
        api.get('/produtos')
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}
function findById(id){
    return new Promise((resolve, reject)=>{
        return api.get(`/produtos/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}
function register(product){
    return new Promise((resolve, reject)=>{
        return api.post(`/produtos`, {
            id: product.id,
            nome: product.name,
            valor: product.price || null,
            quantidadeEstoque: product.quantityInStock || null,
            dataCadastro:product.registrationDate || null,
            observacao: product.details || null
        })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}
function update(product){
    return new Promise((resolve, reject)=>{
        return api.put(`/produtos/${product.id}`,  {
            id: product.id,
            nome: product.name,
            valor: product.price || null,
            quantidadeEstoque: product.quantityInStock || null,
            dataCadastro:product.registrationDate || null,
            observacao: product.details || null
        })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}
function deleteById(product){
    return new Promise((resolve, reject)=>{
        return api.delete(`/produtos/${product.id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}
export default {
    findAll,
    findById,
    register,
    update,
    deleteById
}