const app=require('./app');
const connectDatabase=require("./config/database");
//const dotenv=require('dotenv');
const PORT = 4000;
//dotenv.config({path:"backend/config/config.env"});

   // handing uncaught  error 

   connectDatabase();
 
// app.listen(process.env.PORT,(err)=>{
//     if (err) console.log("Error in server setup")
//     console.log(`server  is working on http://localhost:${process.env.PORT}`)     ;      
// })  

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log(`server  is working on http://localhost:${PORT}`); 
})

  