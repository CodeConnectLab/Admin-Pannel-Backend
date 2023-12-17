const dotenv=require('dotenv');

dotenv.config({path:"./config/config.env"});


const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const connectDatabase=require("./config/database");
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
connectDatabase();    
const Hosting = require("./models/hostingModel"); 
    
app.listen(PORT, function (err) {  
    if (err) console.log(err);  
    console.log("Server listening on PORT", PORT); 
});


app.post("/api/v1/add_hosting", async (req, res) => {
    //  var states='inactive'; 
    const {name,email,mobile,address,domain,states,Package} =req.body;

    const hosting = await Hosting.create({  
        name,email,mobile,address,domain,states,Package
    });
        
    
    try { 
        res.send(hosting); 
      } catch (error) {
        res.status(500).send(error);  
      }

  });


  app.delete("/api/v1/delete/:id", async (req, res) => {
   
    const hosting = await Hosting.findById(req.params.id);

    if (!hosting) {
      res.status(500).json({
        success: true,
        message: "hosting Not Found", 
    });  
    }
    await hosting.deleteOne();
  
    res.status(200).json({
      // success: true,
      // message: " Delete Successfully",
      hosting
    });
 
  });

  
app.get("/api/v1/hosting", async (req, res) => {
   
   
    const hosting = await Hosting.find(); 
   
    
    try {
         
      res.status(200).send(
        hosting 
      );  
     
      } catch (error) { 
        res.status(500).send(error);  
      }

  });

      app.put('/api/v1/editHosting/:id', async (req,res) =>{
        let hosting = Hosting.findById(req.params.id);

        if (!hosting) {
          return res.status(500).json({
            success: false,
            massage: "hosting not found",
          });           
        }
      
        hosting = await Hosting.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        });
      
        res.status(200).json({
          success: true,
          hosting,
        });
      })
  app.get('/', function (req, res) {
    try {
        res.status(200).send(
          {
          "success":true, 
           "massage":"get Product"   
          }
        );  
         
        } catch (error) { 
          res.status(500).send(error);  
        }
  });

  app.post("/api/v1/getByDomain/", async (req, res) => {
    const { domain } = req.body; 
   const hosting = await Hosting.findOne({ domain: domain }); 
   
    try {
      if(!hosting){
        res.status(200).send({
        //   statue:false, 
        //  data: hosting  
         hosting
        }); 
      } 
        res.status(200).send({
        //   statue:true,
        //  data:hosting  
        hosting
        }); 

   
      
        
      } catch (error) {  
        res.status(500).send(error);  
      } 
      });
  


