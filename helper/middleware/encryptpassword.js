const bcrypt = require('bcrypt');


const encryptPassword=(req,res,next)=>{
    const {username,email,password}=req.body

    if (!username || !email || !password){
       return res.json({
            success:false,
            message:"All Fields Required"
        })
    }
    else{
        let saltRounds=8
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        if(err){
            res.json({
                success:false,
                message:"something wrong user not created"


            })
        }
        else{
            req.body.password=hash
            next();
        }

    });

    }
    

}
module.exports=encryptPassword