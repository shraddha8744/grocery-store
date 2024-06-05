const jwt = require('jsonwebtoken');
const config=require("../config")

//-------------take a token and check token is valid or node-----
const verifyUser=(req,res,next)=>{
    let authtoken=req.headers.authorization
    if(authtoken){
        var decoded = jwt.verify(authtoken,config.auth.secret );
        req.body.userId=decoded.userId
        if(decoded){
            next()
        }else{
            return res.json({
                success:false,
                message:"invalid token"
            })
        }



    }
    else{
        res.json({
            success:false,
            message:"token is required"
        })
    }


}
module.exports=verifyUser


