const router=require("express").Router();
const { Route } = require("express");
const {userBankInfo,findByAccountNumber,addBankAccount,removeBankAccount,updateBankAccount}=require("./bank_account.controller")

/*******************************************
 * To handle all Valid Request
 *******************************************/

router.get("/:id",userBankInfo);
router.get("/account/:id",findByAccountNumber);
router.post("/",addBankAccount);
router.get("/remove/:id",removeBankAccount);
router.post("/update",updateBankAccount);


  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:"Invalid request"
    });
    });  

module.exports=router;

