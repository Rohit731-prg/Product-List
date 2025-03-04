const Product = require("../Models/Products.model");

const insertProduct = (req, res) => {
    const {name, price, image} = req.body;

    const product = new Product({
        name,
        price,
        image
    });

    product.save().then(() => {
        res.status(201).json({
            message: "Product added successfully"
        });
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    });
};

const getProducts = (req, res) => {
    const products = Product.find().then((products) => {
        res.status(200).json({
            "message": "Products fetched successfully",
            "products": products
        });
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    });
};

const deleteProduct = (req, res) => {
    const productId = req.params.productId;
    const deleteItem = Product.deleteOne({_id: productId}).then(() => {
        res.status(200).json({
            message: "Product deleted successfully",
            delete: deleteItem
        });
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    });
}

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const {name, price, image} = req.body;
        const obj = {
            name,
            price,
            image
        }

        const update = await Product.updateOne({_id: productId}, obj)
        res.send({
            status: 200,
            message: "Product updated successfully",
            updated: update
        })
    } catch(err) {
        res.send({
            status: 500,
            error: err
        })
    }
}

const getOneProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOne({_id: id});
        res.send({
            status: 200,
            product: product
        })
    } catch (error) {
        res.send({
            status: 500,
            error: error
        })
    }
}

module.exports = {
    insertProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    getOneProduct
}