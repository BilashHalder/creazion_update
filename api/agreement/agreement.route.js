const router=require("express").Router();
const {findAgreement,findAgreementCustomer,updateUpload,updatePrint,removeAgreement,addAgreement}=require("./agreement.controller");
/*******************************************
 * To handle all Valid Request
 *******************************************/
router.get("/:id",findAgreement);
router.get("/customer/:id",findAgreementCustomer);
router.get("/print/:id",updatePrint);
router.get("/upload/:id",updateUpload);
router.get("/remove/:id",removeAgreement);
router.get("/add/:id",addAgreement);



  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:"Invalid request"
    });
    });  

module.exports=router;

