const {PrismaClient}=require("@prisma/client")
const prisma=new PrismaClient({

})

//---------create user-------------------
const createUser=async(userdata)=>{
    let user=await prisma.user.create({
        data:userdata
    })
    return user
}

//--------------get user by email-------------------
const getUserByUserEmail=async(userEmail)=>{
    let user=await prisma.user.findFirst({
        where:{
            email:userEmail
        }

    })
    return user

}

module.exports={
    createUser,
    getUserByUserEmail
}