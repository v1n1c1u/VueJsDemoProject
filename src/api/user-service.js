import api from "./api";
function login(email, password){
    /*
    return new Promise((resolve, reject)=>{
            return api.post(`/login`,{email, password})
            .then(response => resolve(response))
            .catch(error=>reject(error));
    });
    */
   return !!(email === 'admin@admin.com' && password === 'admin');
}
function logout(){
    return new Promise((resolve, reject)=>{
            return api.delete(`/logout`)
            .then(response => resolve(response))
            .catch(error=>reject(error));
    });
}
function findAll(){
    return new Promise((resolve, reject)=>{
            return api.get(`/usuarios`)
            .then(response => resolve(response))
            .catch(error=>reject(error));
    });
}
function findById(id){
    return new Promise((resolve, reject)=>{
        return api.get(`/usuarios/${id}`)
        .then(response => resolve(response))
        .catch(error=>reject(error));
});}
export default {
    login,
    logout,
    findAll,
    findById
}