const express = require("express");
const routes = express.Router();

const userService = require('./service/UserService');
const UserController = require('./controllers/UserController');
const ClientController = require('./controllers/ClientController');
const ProductController = require('./controllers/ProductController');

const userController = new UserController();
const clientController = new ClientController();
const productController = new ProductController();

routes.use(async (req, res, next) => {

    if(process.env.AUTENTICAR =="TRUE"){

        let { authorization } = req.headers;
        let authorized = await userService.validateAuthentication(authorization);
      
        if(req.originalUrl != '/login' && !authorized ) {
            return res.status(401).json({ message:"Unauthorized access" })
        }
    }

    next();
});

//product
routes.get("/products", productController.findAll);
routes.get("/products/:id", productController.findById);
routes.post('/products', productController.register);
routes.put("/products/:id", productController.update);
routes.delete("/products/:id", productController.deleteById);

//client
routes.get("/clients", clientController.findAll);
routes.get("/clients/:id", clientController.findById);
routes.post('/clients', clientController.register);
routes.put("/clients/:id", clientController.update);
routes.delete("/clients/:id", clientController.deleteById);

//user
routes.get("/users", userController.findAll);
routes.get("/users/:id", userController.findById);
routes.post("/login", userController.login);
routes.delete("/logout", userController.logout);

module.exports = routes;