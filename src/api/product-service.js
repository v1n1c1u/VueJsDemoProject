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
        return api.post(`/produtos`, product)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}
function update(product){
    return new Promise((resolve, reject)=>{
        return api.put(`/produtos/${product.id}`, product)
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