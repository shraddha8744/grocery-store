
const bcrypt = require('bcrypt');
const userSevice=require("../../services/user.service")

const CheckUserpassword=async(req,res,next)=>{
      
    const {password,email}=req.body
    if(!password || !email){
        res.json({
            success:false,
            message:"Email And password Both required"
        })
    }
    else{
        let user=await userSevice.getUserByUserEmail(email)
    if(user){
        const match = await bcrypt.compare(password, user.password);
    
        if(match) {
            req.body.userId = user.id;
            next()
            //login
        }
        else{
            return res.json({
                success:false,
                message:"enter correct password"
            })
        }


    }else{
        res.json({
            success:false,
            message:"user not found please enter correct email and assword"
        })
    }
    

    }
    

    
}

module.exports=CheckUserpassword