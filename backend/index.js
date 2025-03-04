const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productsRouters = require("./App/Routers/ProductsRouters");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products/', productsRouters)

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Connected to DB");

    app.listen(process.env.PORT, () => {
        console.log("Server is running on port", process.env.PORT);
    })
}).catch((err) => {
    console.log(err);
})