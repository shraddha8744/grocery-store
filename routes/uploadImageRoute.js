
const express=require("express");
const uploadImage = require("../helper/middleware/uploadImage");
const { saveImage } = require("../controller/uploadImageConntroller");
const router=express.Router();


router.post("/upload",uploadImage,saveImage)
module.exports=router