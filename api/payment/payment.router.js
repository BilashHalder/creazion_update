const router=require("express").Router();

const {addPayment,findPayment,findCustomerPayments,removePayment,updatePayment}=require("./payment.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/
router.get("/:id",findPayment);
router.get("/customer/:id",findCustomerPayments);
router.get("/remove/:id",removePayment);
router.post("/",addPayment);
router.post("/update",updatePayment);


  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:"Invalid request"
    });
    });  

module.exports=router;

