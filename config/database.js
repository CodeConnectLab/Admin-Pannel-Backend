const mongoose= require("mongoose");


// DB_URI='mongodb://0.0.0.0:27017/Hosting';
    
DB_URI='mongodb+srv://abhilekhk6:rSl1VKEbcga3ejtA@cluster0.pjn2izj.mongodb.net/merntask?retryWrites=true&w=majority';
 
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