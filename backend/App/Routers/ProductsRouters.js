const express = require("express");
const { insertProduct, getProducts, deleteProduct, updateProduct, getOneProduct } = require("../Controllers/ProductController");
const productsRouters = express.Router();

productsRouters.post('/insert', insertProduct);
productsRouters.get('/get', getProducts);
productsRouters.delete('/delete/:productId', deleteProduct);
productsRouters.put('/update/:id', updateProduct);
productsRouters.post('/find/:id', getOneProduct);

module.exports = productsRouters;