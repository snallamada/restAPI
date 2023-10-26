const express = require("express");
const app = express();
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://shravan:shravan@atlascluster.sdilt7c.mongodb.net/?retryWrites=true&w=majority",{
    HandshakeError:true, 
    ResetPool:true
}).then(
    () =>console.log("DB connected......")
).catch(err =>console.log(err))
app.get("/",(req,res)=>{res.send("<center><h1>Testing the server.....to create api !!!!!</h1></center>")})
app.listen(8080, ()=>console.log("server is running.....successfully"))