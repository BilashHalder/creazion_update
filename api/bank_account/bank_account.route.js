const router=require("express").Router();
const { Route } = require("express");
const {userBankInfo,findByAccountNumber}=require("./bank_account.controller")

/*******************************************
 * To handle all Valid Request
 *******************************************/

router.get("/:id",userBankInfo);
router.get("/account/:id",findByAccountNumber);
  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:"Invalid request"
    });
    });  

module.exports=router;

