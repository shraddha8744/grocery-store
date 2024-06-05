const {PrismaClient}=require("@prisma/client")
const prisma=new PrismaClient({

})
//------------fetch all product data into database--------------
const getAllProduct=async()=>{
    const products= await prisma.product_data.findMany({})
    return products

}

module.exports={getAllProduct}
