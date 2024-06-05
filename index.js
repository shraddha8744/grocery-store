const express=require("express");
const app=express();
require("dotenv").config()

const config=require("./helper/config.js");
const router = require("./routes/uploadImageRoute.js");
app.use(express.json());




app.use("/api",router)

app.listen(config.port,(err)=>{
    if(!err){
        console.log("server started",config.port);
    }

})
