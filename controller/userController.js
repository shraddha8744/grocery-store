
const config = require("../helper/config");
const UserService=require("../services/user.service")
const jwt = require('jsonwebtoken');


const signupUser=async(req,res)=>{

    try {
        const {username,email,password}=req.body
      if(!username || !email  || !password){
        res.json({
            success:false,
            message:"All fields required"
        })


      }
    let userExist= await UserService.getUserByUserEmail(email)
    if(userExist){
        res.json({
            success:false,
            message:"this email id already exist please enter another email id"
        })
    }else{
        const data=await UserService.createUser({
        ...req.body
        })

        return res.json({
            success:true,
            message:"user created sucssfully",
            data:data

        })
       
      }

        
    } catch (error) {
        res.json({
            success:false,
            message:"please enter proper detail"
        })
        
    }

}
const loginuser=(req,res)=>{
    const token = jwt.sign({ userId: req.body.userId }, config.auth.secret);
    res.json({
        success:true,
        message:"you are logged successfully",
        token:token
    })


}
module.exports={
    signupUser,
    loginuser
}
