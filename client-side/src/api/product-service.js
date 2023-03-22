import api from'./api';

function findAll(){
    return new Promise((resolve, reject) => {
        api.get('/products')
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}
function findById(id){
    return new Promise((resolve, reject)=>{
        return api.get(`/products/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}
function register(product){
    return new Promise((resolve, reject)=>{
        return api.post(`/products`, product)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}
function update(product){
    return new Promise((resolve, reject)=>{
        return api.put(`/products/${product.id}`, product)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}
function deleteById(product){
    return new Promise((resolve, reject)=>{
        return api.delete(`/products/${product.id}`)
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