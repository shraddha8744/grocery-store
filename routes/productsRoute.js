const express=require("express")
const productRoute=express.Router();
const allProducts = require("../controller/productController");
const verifyUser = require("../helper/middleware/checkAuth");

productRoute.use(verifyUser)

productRoute.get("/getall",allProducts)

module.exports=productRoute