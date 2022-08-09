const router=require("express").Router();

/*******************************************
 * To handle all Valid Request
 *******************************************/
router.get("/");



  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:"Invalid request"
    });
    });  

module.exports=router;

