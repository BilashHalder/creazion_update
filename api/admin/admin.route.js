const router=require("express").Router();
const {addAdmin}=require("./admin.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/
router.get("/",addAdmin);



  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:"Invalid request"
    });
    });  

module.exports=router;

