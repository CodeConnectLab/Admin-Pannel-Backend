
const express=require('express');
const {getAllHostion}=require("../controllers/HostingController");


const router=express.Router();
  

router.route('/hosting').get(getAllHostion);

   

module.exports=router;  
