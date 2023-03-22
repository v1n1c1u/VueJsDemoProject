
const Product = require('../models/Product.js');
const productService = require('../service/ProductService.js');

module.exports = class productController {
    
    async findAll(req, res) {
        try {
            let products = productService.findAll();
            return res.json(products);
        } catch (error) {
            console.log(error);
            return res.json({ message:error.message })
        }
    }
    
    async findById(req, res) {
        try {
            var id = req.params.id;

            let product = productService.findById(id);
            return res.json(product);

        } catch (error) {
            console.log(error);
            return res.json({ message:error.message })
        }
    }

    async register(req, res) {
        try {           
            let product = productService.register(req.body);
            return res.json(product);
            
        } catch (error) {
            console.log(error);
            return res.json({ message:error.message })
        }
    }

    async update(req, res) {
        try {
            var id = req.params.id;
            var product = req.body || {};

            product.id = parseInt(id);

            let updatedProduct = productService.update(product);
            return res.json(updatedProduct);

        } catch (error) {
            console.log(error);
            return res.json({ message:error.message })
        }
    }

    async deleteById(req, res) {
        try {
            var id = req.params.id;
            let updatedProduct = productService.deleteById(id);
            return res.json(updatedProduct);

        } catch (error) {
            console.log(error);
            return res.json({ message:error.message })
        }
    }
}