const express=require("express");
const encryptPassword = require("../helper/middleware/encryptpassword");
const { signupUser, loginuser } = require("../controller/userController");
const CheckUserpassword = require("../helper/middleware/checkPassword");
const userRouter=express.Router();

userRouter.post("/createUser",encryptPassword,signupUser)
userRouter.post("/login",CheckUserpassword,loginuser)
module.exports=userRouter

