const mongoose= require("mongoose");


DB_URI='mongodb://0.0.0.0:27017/Hosting';
    
 
const connectDatabase =()=>{
   mongoose.connect(DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useCreateIndex: true,
  }).then((data)=>{
      console.log(`Mongoosedb connected with server :${data.connection.host}`);
    }).catch((err)=>{
      console.log('not connect');
    })
}

module.exports= connectDatabase;