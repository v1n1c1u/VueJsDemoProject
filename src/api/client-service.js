import api from'./api';

function findAll(){
    return new Promise((resolve, reject) => {
        api.get('/clientes')
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}
function findById(id){
    return new Promise((resolve, reject)=>{
        return api.get(`/clientes/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}
function register(client){
    return new Promise((resolve, reject)=>{
        return api.post(`/clientes`, client)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}
function update(client){
    return new Promise((resolve, reject)=>{
        return api.put(`/clientes/${client.id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}
function deleteById(client){
    return new Promise((resolve, reject)=>{
        return api.delete(`/clientes/${client.id}`)
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