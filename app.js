
const express = require('express');
const app = express();
const PORT = 4000;
const connectDatabase=require("./config/database");
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
connectDatabase();
const Hosting = require("./models/hostingModel");
  
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


app.post("/api/v1/add_hosting", async (req, res) => {
   
    const {name,email,mobile,address,ip,domain} =req.body;

    const hosting = await Hosting.create({
        name,email,mobile,address,ip,domain
    });
   
    
    try {
        res.send(hosting);
      } catch (error) {
        res.status(500).send(error);  
      }

  });

  
app.get("/api/v1/hosting", async (req, res) => {
   
   
    const hosting = await Hosting.find();
   
    
    try {
      res.status(200).send(
        {
        "success":true, 
        hosting   
        }
      );  
       /// res.send(hosting);
      } catch (error) { 
        res.status(500).send(error);  
      }

  });
  


