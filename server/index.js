const express = require ("express");
const  cors = require ("cors");
const mongoose =require ("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");

const app = express();
require("dotenv").config();
app.use(express.json());
app.use (cors());  
app.use("/api/users",userRoute); 
app.use("/api/chats",chatRoute); 
app.use("/api/messages",messageRoute); 


app.get("/",(res,req) => {
   res.send("wel");
});

 const port =process.env.port || 8080;
 const uri= process.env.ATLAS_URI;

 app.listen(port,(res,req)=>{
  console.log('work');
 })

 mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 }).then(()=>console.log("okkk")).catch((error)=>console.log("err"))