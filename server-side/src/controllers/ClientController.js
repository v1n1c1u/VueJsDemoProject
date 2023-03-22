const clientService = require('../service/ClientService.js');

module.exports = class ClientController {
    
    async findAll(req, res) {
        try {
            let clients = clientService.findAll();
            return res.json(clients);
        } catch (error) {
            console.log(error);
            return res.json({ message:error.message });
        }
    }
    
    async findById(req, res) {
        try {
            var id = req.params.id;

            let client = clientService.findById(id);
            return res.json(client);

        } catch (error) {
            console.log(error);
            return res.json({ message:error.message });
        }
    }

    async register(req, res) {
        try {           
            let client = clientService.register(req.body);
            return res.json(client);
            
        } catch (error) {
            console.log(error);
            return res.json({ message:error.message });
        }
    }

    async update(req, res) {
        try {
            var id = req.params.id;
            var client = req.body || {};

            client.id = parseInt(id);

            let updatedClient = clientService.update(client);
            return res.json(updatedClient);

        } catch (error) {
            console.log(error);
            return res.json({ message:error.message });
        }
    }
    
    async deleteById(req, res) {
        try {
            var id = req.params.id;
            clientService.deleteById(id);
            return res.json({message: `Client with id ${id} was successfully deleted`});

        } catch (error) {
            console.log(error);
            return res.json({ message:error.message });
        }
    }
}