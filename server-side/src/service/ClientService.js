const Client = require('../models/Client.js');
var currentId = 2;

var clientList = [
    new Client({
        id:1,
        name:"Jose Pereira",
        SSN: '12345678901',
        email: 'jose@exemplo.com',
        phone:'21999887766',
        userId: 1,
        registrationDate: new Date().toISOString(),   
    }),
    new Client({
        id:2,
        name:"Camila Silva",
        SSN: '12345678902',
        email:'jose@exemplo.com',
        phone:'21999887777',
        userId: 1,
        registrationDate: new Date().toISOString()
    })
];

function findAll(){
    return clientList;
}

function findById(id){
    return clientList.find(p => p.id == id);
}

function register(obj){
    var client = new Client(obj);
    currentId++;
    client.id = currentId;
    clientList.push(client);

    return client;
}

function update(client){
    var index = clientList.findIndex(p => p.id == client.id);
    
    if(index < 0){
        return;
    }
    console.log(clientList);
    console.log(client);
    clientList.splice(index, 1, client);
    console.log(clientList);
    return client;
}

function deleteById(id){
    var index = clientList.findIndex(p => p.id == id);
    if(index < 0){
        throw Error(`Unable to find client with id ${id}`);
    }

    clientList.splice(index, 1);
}


module.exports = {
    findAll,
    findById,
    register,
    update,
    deleteById
}