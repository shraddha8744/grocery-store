
const productService=require("../services/product.service")
const allProducts=async(req,res)=>{
    const products=await  productService.getAllProduct()
    if(products){
        return res.json({
            products
        })
       
    }
    else{
        return res.json({
            success:false,
            message:"no data"

        })
            
    }

}

module.exports=allProducts